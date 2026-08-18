"use client";

import { useEffect, useRef } from "react";

/**
 * Diyas floating on dark water.
 *
 * The imagery is deliberate rather than decorative. A diya is kept lit beside
 * the body through the night, and lamps are floated on the Ganga at Haridwar
 * and Garhmukteshwar during the asthi visarjan. The embers rising and fading
 * carry the same reading families give the pyre.
 *
 * It is kept slow and dim on purpose. Nothing here should read as celebratory.
 *
 * Behaviour:
 *   - `prefers-reduced-motion` renders a single still frame, no loop
 *   - the loop pauses when the hero scrolls out of view or the tab is hidden
 *   - device pixel ratio is capped at 2 so large retina screens stay cheap
 *   - if the 2D context is unavailable nothing renders and the hero is unaffected
 */

interface HeroCanvasProps {
  className?: string;
  /** Scales the number of lamps and embers. 1 is the full home page treatment. */
  density?: number;
  /** Where the waterline sits, as a fraction of the canvas height. */
  waterline?: number;
  /** Overall opacity of the whole scene. Keep low so text stays readable. */
  intensity?: number;
}

interface Diya {
  /** Horizontal position in the 0..1 range, wraps around. */
  x: number;
  /** 0 is nearest the viewer, 1 is furthest upstream. */
  depth: number;
  speed: number;
  bobPhase: number;
  flickerPhase: number;
  flickerSpeed: number;
  size: number;
  rippleAt: number;
}

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  life: number;
  size: number;
}

interface Ripple {
  x: number;
  y: number;
  age: number;
  life: number;
  maxRadius: number;
}

const MARIGOLD = { r: 224, g: 166, b: 60 };
const FLAME_PALE = { r: 255, g: 244, b: 214 };

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function HeroCanvas({
  className = "",
  density = 1,
  waterline = 0.92,
  intensity = 1,
}: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let waterY = 0;
    let raf = 0;
    let running = false;
    let lastTime = 0;
    let elapsed = 0;

    const diyaCount = Math.max(3, Math.round(8 * density));
    const emberCap = Math.max(6, Math.round(26 * density));

    const diyas: Diya[] = [];
    const embers: Ember[] = [];
    const ripples: Ripple[] = [];

    /* ----------------------------- setup ----------------------------- */

    function seed() {
      diyas.length = 0;

      // Take an even spread of depths, then shuffle it. Without the shuffle,
      // depth would track the seeding index alongside x and the lamps would
      // fade in a straight diagonal across the hero, which reads as a mistake.
      const depths = Array.from({ length: diyaCount }, (_, i) =>
        Math.pow(i / Math.max(1, diyaCount - 1), 0.85),
      );
      for (let i = depths.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [depths[i], depths[j]] = [depths[j], depths[i]];
      }

      for (let i = 0; i < diyaCount; i++) {
        diyas.push({
          // Spread them out rather than clustering on a random draw.
          x: (i + rand(-0.32, 0.32)) / diyaCount,
          depth: depths[i],
          speed: rand(0.006, 0.014),
          bobPhase: rand(0, Math.PI * 2),
          flickerPhase: rand(0, Math.PI * 2),
          flickerSpeed: rand(2.2, 4.1),
          size: rand(0.85, 1.25),
          rippleAt: rand(1.5, 6),
        });
      }
      // Draw order runs furthest first so nearer lamps sit in front.
      diyas.sort((a, b) => b.depth - a.depth);
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas!.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      waterY = height * waterline;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    /* ----------------------------- geometry ----------------------------- */

    /** Screen position of a lamp, including its bob. */
    function diyaPos(d: Diya, t: number) {
      // Further lamps sit higher up the frame, receding towards the bank.
      // The spread is kept tight so the whole scene stays inside the empty
      // band beneath the hero copy rather than drifting over it.
      const y = waterY - d.depth * height * 0.065 + Math.sin(t * 0.9 + d.bobPhase) * 2;
      return { x: d.x * width, y };
    }

    /**
     * Nearer lamps are larger and brighter.
     * The base unit is tied to hero height so the scene holds its proportions
     * from a phone through to a wide desktop.
     */
    function diyaScale(d: Diya) {
      const base = Math.min(13, Math.max(5, height / 85));
      return (1 - d.depth * 0.5) * d.size * base;
    }

    function diyaAlpha(d: Diya) {
      return (1 - d.depth * 0.55) * intensity;
    }

    /* ----------------------------- drawing ----------------------------- */

    function drawWater(t: number) {
      const c = ctx!;
      // A few slow horizontal glints, enough to imply a surface without a hard
      // edge. They straddle the waterline so the band reads as open water
      // rather than as a line drawn across the hero.
      const bands = 11;
      const top = waterY - height * 0.075;
      const span = height - top;
      for (let i = 0; i < bands; i++) {
        const p = i / bands;
        const y = top + p * span;
        if (y > height) continue;
        const drift = Math.sin(t * 0.32 + i * 1.7) * width * 0.06;
        const w = width * (0.14 + 0.09 * Math.sin(t * 0.24 + i));
        const x = width * (0.1 + ((i * 0.17) % 0.8)) + drift;
        const a = 0.03 * intensity * (1 - Math.abs(p - 0.4));
        c.fillStyle = `rgba(${MARIGOLD.r}, ${MARIGOLD.g}, ${MARIGOLD.b}, ${a})`;
        c.fillRect(x - w / 2, y, w, 1);
      }
    }

    function drawReflection(x: number, y: number, s: number, alpha: number, t: number) {
      const c = ctx!;
      // Broken dashes of light rather than a mirror. Cheap and reads as water.
      const rows = 4;
      for (let i = 1; i <= rows; i++) {
        const yy = y + i * s * 1.7;
        if (yy > height) break;
        const wobble = 0.55 + 0.45 * Math.sin(t * 1.7 + i * 0.9 + x * 0.01);
        const w = s * (2.6 - i * 0.4) * wobble;
        if (w <= 0) continue;
        const a = alpha * 0.3 * (1 - i / (rows + 1));
        c.fillStyle = `rgba(235, 192, 99, ${a})`;
        c.fillRect(x - w, yy, w * 2, Math.max(1, s * 0.2));
      }
    }

    function drawGlow(x: number, y: number, s: number, alpha: number, flicker: number) {
      const c = ctx!;
      const r = s * 9 * (0.94 + flicker * 0.1);
      const g = c.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${FLAME_PALE.r}, ${FLAME_PALE.g}, ${FLAME_PALE.b}, ${0.42 * alpha})`);
      g.addColorStop(0.12, `rgba(${MARIGOLD.r}, ${MARIGOLD.g}, ${MARIGOLD.b}, ${0.24 * alpha})`);
      g.addColorStop(0.4, `rgba(${MARIGOLD.r}, ${MARIGOLD.g}, ${MARIGOLD.b}, ${0.08 * alpha})`);
      g.addColorStop(1, `rgba(${MARIGOLD.r}, ${MARIGOLD.g}, ${MARIGOLD.b}, 0)`);
      c.fillStyle = g;
      c.beginPath();
      c.arc(x, y, r, 0, Math.PI * 2);
      c.fill();
    }

    function drawLamp(x: number, y: number, s: number, alpha: number) {
      const c = ctx!;
      // A diya is a shallow clay saucer, wider than it is tall. Keeping it
      // flat is what separates this from looking like a row of candles.
      c.beginPath();
      c.ellipse(x, y + s * 0.5, s * 2.5, s * 0.72, 0, 0, Math.PI * 2);
      c.fillStyle = `rgba(38, 22, 10, ${0.72 * alpha})`;
      c.fill();
      // Warm lip where the light catches the rim.
      c.beginPath();
      c.ellipse(x, y + s * 0.22, s * 2.3, s * 0.44, 0, Math.PI, Math.PI * 2);
      c.fillStyle = `rgba(190, 118, 44, ${0.55 * alpha})`;
      c.fill();
    }

    function drawFlame(x: number, y: number, s: number, alpha: number, flicker: number) {
      const c = ctx!;
      // Short and narrow. A diya wick gives a small teardrop, not a taper.
      const h = s * (1.65 + flicker * 0.4);
      const w = s * 0.6 * (1 + flicker * 0.07);
      const lean = flicker * s * 0.14;
      c.beginPath();
      c.moveTo(x + lean, y - h);
      c.bezierCurveTo(x + w, y - h * 0.46, x + w * 0.82, y, x, y);
      c.bezierCurveTo(x - w * 0.82, y, x - w, y - h * 0.46, x + lean, y - h);
      const g = c.createLinearGradient(x, y, x, y - h);
      g.addColorStop(0, `rgba(201, 136, 30, ${0.85 * alpha})`);
      g.addColorStop(0.45, `rgba(238, 186, 88, ${0.92 * alpha})`);
      g.addColorStop(1, `rgba(${FLAME_PALE.r}, ${FLAME_PALE.g}, ${FLAME_PALE.b}, ${0.96 * alpha})`);
      c.fillStyle = g;
      c.fill();
    }

    function drawRipple(rp: Ripple) {
      const c = ctx!;
      const p = rp.age / rp.life;
      if (p >= 1) return;
      const r = rp.maxRadius * p;
      const a = 0.2 * intensity * (1 - p) * (1 - p);
      c.strokeStyle = `rgba(${MARIGOLD.r}, ${MARIGOLD.g}, ${MARIGOLD.b}, ${a})`;
      c.lineWidth = 1;
      c.beginPath();
      // Squashed vertically so it lies on the surface rather than facing us.
      c.ellipse(rp.x, rp.y, r, r * 0.26, 0, 0, Math.PI * 2);
      c.stroke();
    }

    function drawEmber(e: Ember) {
      const c = ctx!;
      const p = e.age / e.life;
      // Fade in quickly, then out over the rest of the rise.
      const a = (p < 0.15 ? p / 0.15 : 1 - (p - 0.15) / 0.85) * 0.5 * intensity;
      if (a <= 0) return;
      const g = c.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.size * 4);
      g.addColorStop(0, `rgba(${FLAME_PALE.r}, ${FLAME_PALE.g}, ${FLAME_PALE.b}, ${a})`);
      g.addColorStop(0.4, `rgba(${MARIGOLD.r}, ${MARIGOLD.g}, ${MARIGOLD.b}, ${a * 0.5})`);
      g.addColorStop(1, `rgba(${MARIGOLD.r}, ${MARIGOLD.g}, ${MARIGOLD.b}, 0)`);
      c.fillStyle = g;
      c.beginPath();
      c.arc(e.x, e.y, e.size * 4, 0, Math.PI * 2);
      c.fill();
    }

    /* ----------------------------- simulation ----------------------------- */

    function spawnEmber(x: number, y: number, s: number) {
      if (embers.length >= emberCap) return;
      embers.push({
        x: x + rand(-s, s),
        y: y - s * 2,
        vx: rand(-4, 4),
        vy: rand(-26, -14),
        age: 0,
        life: rand(2.6, 4.8),
        size: rand(0.5, 1.1) * Math.max(0.7, s * 0.32),
      });
    }

    function step(dt: number, t: number) {
      for (const d of diyas) {
        d.x += d.speed * dt * (1 - d.depth * 0.55);
        if (d.x > 1.08) d.x = -0.08;

        d.rippleAt -= dt;
        if (d.rippleAt <= 0) {
          d.rippleAt = rand(2.5, 6.5);
          const { x, y } = diyaPos(d, t);
          const s = diyaScale(d);
          ripples.push({
            x,
            y: y + s * 1.1,
            age: 0,
            life: rand(3, 4.6),
            maxRadius: s * rand(9, 15),
          });
          if (Math.random() < 0.75) spawnEmber(x, y, s);
        }
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].age += dt;
        if (ripples[i].age >= ripples[i].life) ripples.splice(i, 1);
      }

      for (let i = embers.length - 1; i >= 0; i--) {
        const e = embers[i];
        e.age += dt;
        if (e.age >= e.life || e.y < -20) {
          embers.splice(i, 1);
          continue;
        }
        // Slow the rise as it cools, and sway sideways.
        const decay = 1 - (e.age / e.life) * 0.55;
        e.y += e.vy * decay * dt;
        e.x += (e.vx + Math.sin(t * 0.8 + e.age * 1.4) * 7) * dt;
      }
    }

    function render(t: number) {
      const c = ctx!;
      c.clearRect(0, 0, width, height);
      // Additive blending makes overlapping glows pool like real light on water.
      c.globalCompositeOperation = "lighter";

      drawWater(t);
      for (const rp of ripples) drawRipple(rp);

      // Furthest first so nearer lamps sit in front.
      for (let i = diyas.length - 1; i >= 0; i--) {
        const d = diyas[i];
        const { x, y } = diyaPos(d, t);
        const s = diyaScale(d);
        const alpha = diyaAlpha(d);
        const flicker = Math.sin(t * d.flickerSpeed + d.flickerPhase) * 0.5 + 0.5;

        drawReflection(x, y + s, s, alpha, t);
        drawGlow(x, y, s, alpha, flicker);
      }

      for (const e of embers) drawEmber(e);

      // The clay bodies are solid objects, so they draw normally.
      c.globalCompositeOperation = "source-over";
      for (let i = diyas.length - 1; i >= 0; i--) {
        const d = diyas[i];
        const { x, y } = diyaPos(d, t);
        const s = diyaScale(d);
        const alpha = diyaAlpha(d);
        drawLamp(x, y, s, alpha);
      }

      c.globalCompositeOperation = "lighter";
      for (let i = diyas.length - 1; i >= 0; i--) {
        const d = diyas[i];
        const { x, y } = diyaPos(d, t);
        const s = diyaScale(d);
        const alpha = diyaAlpha(d);
        const flicker = Math.sin(t * d.flickerSpeed + d.flickerPhase) * 0.5 + 0.5;
        drawFlame(x, y - s * 0.1, s, alpha, flicker);
      }
      c.globalCompositeOperation = "source-over";
    }

    /* ----------------------------- loop ----------------------------- */

    function frame(now: number) {
      if (!running) return;
      // Clamp dt so a backgrounded tab does not fast forward the scene.
      const dt = Math.min(0.05, (now - lastTime) / 1000 || 0);
      lastTime = now;
      elapsed += dt;
      step(dt, elapsed);
      render(elapsed);
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (running || reduceMotion) return;
      running = true;
      lastTime = performance.now();
      raf = requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    /* ----------------------------- wiring ----------------------------- */

    resize();
    seed();

    if (reduceMotion) {
      // Settle the scene, then paint one still frame.
      for (let i = 0; i < 40; i++) step(0.05, i * 0.05);
      render(2);
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) render(elapsed || 2);
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (canvas.getBoundingClientRect().bottom > 0) start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [density, waterline, intensity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
