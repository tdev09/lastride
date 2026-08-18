import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const runtime = "nodejs";
export const alt = `${site.legalName}, 24 hour funeral helpline`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 72px",
          background:
            "linear-gradient(150deg, #080b11 0%, #151b26 58%, #131c28 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              border: "2px solid rgba(255,255,255,0.22)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 20,
                height: 26,
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                background: "linear-gradient(180deg, #f4da97 0%, #e0a63c 55%, #a86b16 100%)",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
              {site.name}
            </div>
            <div
              style={{
                fontSize: 14,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#ebc063",
                marginTop: 2,
              }}
            >
              Funeral Services
            </div>
          </div>

          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid rgba(224,166,60,0.35)",
              background: "rgba(224,166,60,0.10)",
              borderRadius: 999,
              padding: "10px 20px",
              fontSize: 18,
              color: "#f4da97",
            }}
          >
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: 5,
                background: "#e0a63c",
              }}
            />
            Helpline open, 24 hours
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>You make one call.</span>
            <span style={{ color: "#ebc063" }}>We handle the rest.</span>
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 27,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.62)",
              maxWidth: 880,
            }}
          >
            Cremation booking, freezer box, hearse van, pandit ji, samagri and
            the paperwork. Across 25 Indian cities.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 30,
          }}
        >
          <div style={{ display: "flex", gap: 52 }}>
            {[
              ["15+", "Years"],
              ["5,000+", "Families"],
              ["25", "Cities"],
              ["24x7", "Helpline"],
            ].map(([v, l]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 32, fontWeight: 700, color: "#ebc063" }}>
                  {v}
                </span>
                <span
                  style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", marginTop: 4 }}
                >
                  {l}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#c9881e",
              color: "#ffffff",
              borderRadius: 999,
              padding: "18px 34px",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {site.contact.phone}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
