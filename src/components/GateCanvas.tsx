"use client";

import { useEffect, useRef } from "react";

/**
 * The gateway motif, drawn on canvas.
 *
 * It is the same arched form as the logo, and it is meant to read as a
 * passage rather than as decoration. Canvas buys two things a stroke-dash
 * animation in SVG cannot: the arches trace in from both feet and meet at
 * the crown, and once they have settled a slow wave of light travels through
 * them, outermost arch inward, the way a lamp carried through a gateway
 * lights one arch at a time.
 *
 * It is kept dim on purpose. This sits behind the hero copy and must never
 * compete with it, so nothing here is brighter than a lamp seen at distance.
 *
 * Behaviour matches HeroCanvas:
 *   - `prefers-reduced-motion` renders the gate drawn and still, no loop
 *   - the loop pauses when the hero scrolls out of view or the tab is hidden
 *   - device pixel ratio is capped at 2 so large retina screens stay cheap
 *   - if the 2D context is unavailable nothing renders and the hero is unaffected
 */

interface GateCanvasProps {
  /** Extra classes on the positioned box, for the rare hero that needs them. */
  className?: string;
  /** Overall opacity of the whole motif. Keep low so the copy stays first. */
  intensity?: number;
  /** How many arches. Fewer reads as a simpler, more open gate. */
  arches?: number;
}

/** The motif is authored in a 300x300 field and cover-fitted to the element. */
const VIEW = 300;
const DEFAULT_ARCHES = 7;
const RING_RADII = [40, 24, 9];
const RING_X = 150;
const RING_Y = 112;

/** marigold-200, the warm line the logo is drawn in. */
const LINE = { r: 244, g: 218, b: 151 };
const FLAME = { r: 255, g: 244, b: 214 };

/* Timeline, in seconds. */
const TRACE_AT = 0.3;
const TRACE_STAGGER = 0.15;
const TRACE_FOR = 1.9;
const RING_AT = 1.9;
const RING_STAGGER = 0.22;
const RING_FOR = 1.4;
/** One wave through the gate, then a long rest. */
const WAVE_EVERY = 7.5;
const WAVE_STAGGER = 0.3;
const WAVE_FOR = 2.9;

interface Arch {
  /** Radius of the semicircle, and half the span between the feet. */
  r: number;
  /** Height of the springing line, where the legs give way to the arc. */
  cy: number;
  /** Length of one leg. */
  leg: number;
  /** Length of the whole outline, foot to foot. */
  len: number;
  path: Path2D;
}

function rgba(c: { r: number; g: number; b: number }, a: number) {
  return `rgba(${c.r}, ${c.g}, ${c.b}, ${a})`;
}

function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function easeOut(p: number) {
  return 1 - Math.pow(1 - p, 3);
}

/**
 * Seven arches sharing a centre line, each one shorter and tighter than the
 * last. Same geometry the motif has always used, expressed as a path that can
 * be stroked partially.
 */
function buildArches(count: number): Arch[] {
  const arches: Arch[] = [];
  for (let i = 0; i < count; i++) {
    const r = 110 - i * 10;
    const cy = 150 + i * 6;
    const leg = VIEW - cy;
    const path = new Path2D();
    path.moveTo(RING_X - r, VIEW);
    path.lineTo(RING_X - r, cy);
    // Upper semicircle, left springing point round to the right one.
    path.arc(RING_X, cy, r, Math.PI, Math.PI * 2);
    path.lineTo(RING_X + r, VIEW);
    arches.push({ r, cy, leg, len: leg * 2 + Math.PI * r, path });
  }
  return arches;
}

/** Walks the outline, so a travelling light knows where it is. */
function pointAt(a: Arch, s: number) {
  if (s <= a.leg) return { x: RING_X - a.r, y: VIEW - s };
  const arcLen = Math.PI * a.r;
  if (s <= a.leg + arcLen) {
    const th = Math.PI + (s - a.leg) / a.r;
    return { x: RING_X + a.r * Math.cos(th), y: a.cy + a.r * Math.sin(th) };
  }
  return { x: RING_X + a.r, y: a.cy + (s - a.leg - arcLen) };
}

export function GateCanvas({
  className = "",
  intensity = 1,
  arches: archCountProp = DEFAULT_ARCHES,
}: GateCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const archCount = typeof archCountProp === "number" ? archCountProp : DEFAULT_ARCHES;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const arches = buildArches(archCount);

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = false;
    let lastTime = 0;
    let elapsed = 0;

    /* ----------------------------- setup ----------------------------- */

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas!.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
    }

/**
     * Cover-fits the square field to the element and leaves the context in
     * motif units, so every coordinate below reads as it does in the artwork.
     *
     * The field is planted on the bottom edge rather than centred, so the feet
     * of the gate always stand on the floor of the section. In a box taller
     * than it is wide the two are the same thing; in a short wide one, only
     * this reads as a gateway rather than as arcs floating in the frame.
     */
    function frameField() {
      const scale = Math.max(width, height) / VIEW;
      const tx = (width - VIEW * scale) / 2;
      const ty = height - VIEW * scale;
      ctx!.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * tx, dpr * ty);
    }

    /* ----------------------------- drawing ----------------------------- */

    /** A soft head of light. Radial rather than shadowBlur, which is cheaper. */
    function glow(x: number, y: number, radius: number, alpha: number) {
      const c = ctx!;
      const g = c.createRadialGradient(x, y, 0, x, y, radius);
      g.addColorStop(0, rgba(FLAME, alpha));
      g.addColorStop(0.4, rgba(LINE, alpha * 0.4));
      g.addColorStop(1, rgba(LINE, 0));
      c.fillStyle = g;
      c.beginPath();
      c.arc(x, y, radius, 0, Math.PI * 2);
      c.fill();
    }

    /**
     * Strokes a run of the outline ending at `head`. Three passes of
     * decreasing brightness and increasing length give the light a tail
     * without walking the path point by point.
     */
    function trail(a: Arch, head: number, alpha: number) {
      const c = ctx!;
      const passes: [number, number][] = [
        [3, alpha],
        [13, alpha * 0.44],
        [42, alpha * 0.18],
      ];
      for (const [length, a2] of passes) {
        c.setLineDash([length, a.len]);
        c.lineDashOffset = -(head - length);
        c.strokeStyle = rgba(FLAME, a2);
        c.stroke(a.path);
      }
      c.setLineDash([]);
      c.lineDashOffset = 0;
    }

    function render(t: number) {
      const c = ctx!;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.clearRect(0, 0, width, height);
      frameField();

      c.lineWidth = 0.9;
      c.lineCap = "round";

      // The whole motif breathes, the way lamplight does against a wall.
      const breath = 1 + 0.3 * Math.sin((t * Math.PI * 2) / 11);
      const base = 0.115 * intensity * breath;

      // Where the wave of light has reached, once the gate has been drawn.
      const wave = t < 3.6 ? -1 : (t - 3.6) % WAVE_EVERY;

      for (let i = 0; i < arches.length; i++) {
        const a = arches[i];
        const traced = clamp01((t - (TRACE_AT + i * TRACE_STAGGER)) / TRACE_FOR);
        if (traced <= 0) continue;
        const p = easeOut(traced);

        // Two runs growing from the feet towards the crown. They meet there,
        // which is the moment the shape reads as a gate rather than as lines.
        const on = (p * a.len) / 2;
        c.strokeStyle = rgba(LINE, base);
        if (p < 1) {
          c.setLineDash([on, a.len]);
          c.lineDashOffset = 0;
          c.stroke(a.path);
          c.lineDashOffset = -(a.len - on);
          c.stroke(a.path);
          c.setLineDash([]);
          c.lineDashOffset = 0;
        } else {
          c.stroke(a.path);
        }

        c.globalCompositeOperation = "lighter";

        if (p < 1) {
          // The two drawing tips.
          const left = pointAt(a, on);
          const right = pointAt(a, a.len - on);
          const tip = 0.5 * intensity * (1 - p * 0.4);
          glow(left.x, left.y, 5.5, tip);
          glow(right.x, right.y, 5.5, tip);
        } else if (wave >= 0) {
          // One pass of light per arch, outermost first, so the wave travels
          // inward through the gate rather than everything lighting at once.
          const local = (wave - i * WAVE_STAGGER) / WAVE_FOR;
          if (local > 0 && local < 1) {
            // Ease in and out of the run so it does not snap on at the foot.
            const fade = Math.sin(local * Math.PI);
            const head = local * a.len;
            trail(a, head, 0.5 * intensity * fade);
            const at = pointAt(a, head);
            glow(at.x, at.y, 7, 0.42 * intensity * fade);
          }
        }

        c.globalCompositeOperation = "source-over";
      }

      /* The lamp at the crown. Three rings and a flame, the logo's diya. */
      for (let i = 0; i < RING_RADII.length; i++) {
        const r = RING_RADII[i];
        const drawn = clamp01((t - (RING_AT + i * RING_STAGGER)) / RING_FOR);
        if (drawn <= 0) continue;
        const p = easeOut(drawn);
        const circ = 2 * Math.PI * r;

        // Each ring takes its turn brightening as the wave passes through.
        const turn = wave < 0 ? 0 : Math.max(0, Math.sin(((wave - 1.1 - i * 0.3) / 1.6) * Math.PI));
        c.strokeStyle = rgba(LINE, base * (1 + turn * 1.9));
        c.setLineDash(p < 1 ? [p * circ, circ] : []);
        c.lineDashOffset = 0;
        c.beginPath();
        c.arc(RING_X, RING_Y, r, 0, Math.PI * 2);
        c.stroke();
        c.setLineDash([]);
      }

      if (t > RING_AT) {
        const flicker = 0.55 + 0.45 * Math.sin(t * 2.3) * Math.sin(t * 1.31 + 1.7);
        c.globalCompositeOperation = "lighter";
        glow(RING_X, RING_Y, 7 + flicker * 2.5, 0.26 * intensity * (0.7 + flicker * 0.5));
        c.globalCompositeOperation = "source-over";
      }
    }

    /* ----------------------------- loop ----------------------------- */

    function frame(now: number) {
      if (!running) return;
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      elapsed += dt;
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

    // A tab loaded in the background never gets a frame, because rAF does not
    // run while the document is hidden. Paint the settled gate in that case so
    // the hero is whole the moment the tab is looked at, entrance or no.
    if (reduceMotion || document.hidden) {
      // Past every entrance, before the first wave: the gate simply stands.
      elapsed = 3.4;
      render(elapsed);
    }

    const ro = new ResizeObserver(() => {
      // Sizing the backing store wipes it, so always repaint. A running loop
      // overwrites this on its next frame; a paused one would otherwise be
      // left holding an empty canvas.
      resize();
      render(elapsed);
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
  }, [intensity, archCount]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-0 -right-24 hidden h-full w-[600px] lg:block ${className}`}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
