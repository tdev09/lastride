import type { IconKey } from "@/data/types";

/**
 * Line icon set drawn on a 24x24 grid.
 * Stroke inherits currentColor so icons take the colour of their container.
 */
const paths: Record<IconKey, React.ReactNode> = {
  flame: (
    <>
      <path d="M12 2.7c.9 2.6 2.6 3.7 3.9 5.3a6.6 6.6 0 0 1 1.6 4.3 5.5 5.5 0 0 1-11 0c0-1.4.5-2.5 1.2-3.4.4 1 1 1.6 1.8 1.9-.2-3 1.3-6 2.5-8.1Z" />
      <path d="M12 21.3a2.9 2.9 0 0 1-1.4-5.4c.6-.4 1.1-1 1.4-1.8.4.8.9 1.4 1.5 1.8a2.9 2.9 0 0 1-1.5 5.4Z" />
    </>
  ),
  truck: (
    <>
      <path d="M2 7.5h11v9H2z" />
      <path d="M13 10.5h4.2l2.8 3.2v2.8h-7z" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="16.5" cy="18" r="1.8" />
      <path d="M5 11h5M5 13.5h5" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 2.8v18.4M4 7.4l16 9.2M20 7.4 4 16.6" />
      <path d="m9.4 4.9 2.6 2.2 2.6-2.2M9.4 19.1l2.6-2.2 2.6 2.2" />
      <path d="m4.4 11 .6-3.4 3.3-.7M19.6 13l-.6 3.4-3.3.7M19.6 11l-.6-3.4-3.3-.7M4.4 13l.6 3.4 3.3.7" />
    </>
  ),
  van: (
    <>
      <path d="M2 16V9.5A1.5 1.5 0 0 1 3.5 8H14l4.5 3.5H21a1 1 0 0 1 1 1V16" />
      <path d="M2 16h2M9 16h6M20 16h2" />
      <circle cx="6.5" cy="16.5" r="2" />
      <circle cx="17.5" cy="16.5" r="2" />
      <path d="M6 11h5M6 5.5c1.4 1 4.6 1 6 0" />
    </>
  ),
  vial: (
    <>
      <path d="M9 2.5h6M10 2.5v6.2L6.4 17a3 3 0 0 0 2.7 4.4h5.8A3 3 0 0 0 17.6 17L14 8.7V2.5" />
      <path d="M7.6 14.5h8.8" />
    </>
  ),
  plane: (
    <>
      <path d="M10.2 21.5 12 16.2l4.6-1.4.9 5 1.9-.6-.4-5.1 3-.9a2 2 0 0 0-1.1-3.8l-2.9.9-3.2-4-1.9.6 1.5 4.8-4.6 1.4-2.6-4.7-1.9.6 1.4 5.3-1.8 3.6Z" />
    </>
  ),
  helicopter: (
    <>
      <path d="M3 5h18M12 5v3" />
      <path d="M7 12.5h7a4 4 0 0 1 4 4v1H7a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 7 12.5Z" />
      <path d="M6 17.5v2M18 17.5v2M5 19.5h14M18 14.5h3" />
      <path d="M9.5 8v4.5" />
    </>
  ),
  basket: (
    <>
      <path d="M3 9h18l-1.7 9.3a2 2 0 0 1-2 1.7H6.7a2 2 0 0 1-2-1.7Z" />
      <path d="m8 9 2.5-5M16 9l-2.5-5" />
      <path d="M9.5 13v3M14.5 13v3" />
    </>
  ),
  hall: (
    <>
      <path d="M3 20.5h18M4.5 20.5V10l7.5-5.5L19.5 10v10.5" />
      <path d="M9.5 20.5v-5.5a2.5 2.5 0 0 1 5 0v5.5" />
      <path d="M2 10h20" />
    </>
  ),
  flower: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 9.6c0-2.6-1-4.1-1-5.1a1 1 0 0 1 2 0c0 1-1 2.5-1 5.1ZM12 14.4c0 2.6 1 4.1 1 5.1a1 1 0 0 1-2 0c0-1 1-2.5 1-5.1Z" />
      <path d="M9.6 12c-2.6 0-4.1 1-5.1 1a1 1 0 0 1 0-2c1 0 2.5 1 5.1 1ZM14.4 12c2.6 0 4.1-1 5.1-1a1 1 0 0 1 0 2c-1 0-2.5-1-5.1-1Z" />
      <path d="m10.3 10.3-3-3M13.7 13.7l3 3M13.7 10.3l3-3M10.3 13.7l-3 3" />
    </>
  ),
  candle: (
    <>
      <path d="M12 2.8c1.4 1.6 2.2 2.7 2.2 3.9a2.2 2.2 0 0 1-4.4 0c0-1.2.8-2.3 2.2-3.9Z" />
      <path d="M8.5 10.5h7v10.7h-7z" />
      <path d="M12 8.9v1.6M8.5 14h7" />
    </>
  ),
  water: (
    <>
      <path d="M12 2.8c3.8 4.3 6 7 6 10a6 6 0 0 1-12 0c0-3 2.2-5.7 6-10Z" />
      <path d="M9.2 13.5c.2 1.8 1.3 2.9 3 3.2" />
    </>
  ),
  om: (
    <>
      <path d="M6.8 14.4a3.3 3.3 0 1 0 3.3-3.3c-1.5 0-2.4 1-2.4 2" />
      <path d="M10.1 11.1c2 0 3.2-1.4 3.2-3 0-1.2-.7-2-1.6-2-.8 0-1.4.5-1.4 1.2" />
      <path d="M13.3 11.6c.8-.7 1.9-1 3-.6 1.4.5 2.1 1.9 1.7 3.3a3.3 3.3 0 0 1-4.4 2.1" />
      <path d="M15.6 6.2c.6-.7 1.6-.9 2.4-.4M18.6 3.4a.9.9 0 1 0 .01 0" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M8 14h2.5M8 17.5h8M13.5 14H16" />
    </>
  ),
  tower: (
    <>
      <path d="M4 20.5h16M6 20.5V9l6-5.5L18 9v11.5" />
      <path d="M6 9h12M9 20.5V14h6v6.5" />
      <path d="M12 3.5V1.8" />
    </>
  ),
  cross: (
    <>
      <path d="M12 3v18M7 8h10" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.4 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8 4.5 6v6.2c0 4.3 3.1 7.7 7.5 9 4.4-1.3 7.5-4.7 7.5-9V6Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="5.5" r="2.5" />
      <circle cx="18" cy="18.5" r="2.5" />
      <path d="M6 8v4a4 4 0 0 0 4 4h4a2 2 0 0 1 2 2" />
    </>
  ),
  document: (
    <>
      <path d="M6 2.8h7.5L19 8.4v12.8H6z" />
      <path d="M13.2 2.8v5.8H19" />
      <path d="M9 13h7M9 16.5h7" />
    </>
  ),
  phone: (
    <>
      <path d="M6.8 3.5h3l1.5 4-2 1.4a11.4 11.4 0 0 0 5.8 5.8l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.7 16.7 0 0 1 4.8 5.7a2 2 0 0 1 2-2.2Z" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20.4S3.8 15.7 3.8 9.8a4.4 4.4 0 0 1 8.2-2.3 4.4 4.4 0 0 1 8.2 2.3c0 5.9-8.2 10.6-8.2 10.6Z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 19.5a6 6 0 0 1 12 0" />
      <path d="M16.2 5.2a3.2 3.2 0 0 1 0 5.6M17.5 14.4a6 6 0 0 1 3.5 5.1" />
    </>
  ),
  rupee: (
    <>
      <path d="M7 4.5h10M7 9h10M7 4.5c4 0 6 1.5 6 4.5s-2 4.5-6 4.5h1.5l7 6" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.2 12.2 2.6 2.6 5-5.4" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s6.5-6 6.5-10.5a6.5 6.5 0 0 0-13 0C5.5 15 12 21 12 21Z" />
      <circle cx="12" cy="10.4" r="2.5" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-6 w-6",
  strokeWidth = 1.5,
}: {
  name: IconKey;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

/** Small decorative marigold used as a section divider. */
export function MarigoldMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g fill="currentColor">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="12"
            cy="5.6"
            rx="2.5"
            ry="4.2"
            opacity="0.55"
            transform={`rotate(${i * 45} 12 12)`}
          />
        ))}
        <circle cx="12" cy="12" r="3" />
      </g>
    </svg>
  );
}
