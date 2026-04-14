interface BdmLogoProps {
  size?: number;
  className?: string;
}

export function BdmLogo({ size = 32, className = "" }: BdmLogoProps) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.12)}
      viewBox="0 0 68 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="BDM logo"
    >
      <defs>
        <linearGradient id="bdm-grad" x1="0" y1="0" x2="68" y2="76" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e879f9" />
          <stop offset="55%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
      </defs>

      {/* Stem + top loop — center of stem at x=13, top circle center at (35, 25), r=22 */}
      <path
        d="M 13 70 L 13 25 A 22 22 0 0 1 57 25 A 22 22 0 0 1 13 25"
        stroke="url(#bdm-grad)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom belly — full circle center at (47, 58), r=15 */}
      <path
        d="M 32 58 A 15 15 0 0 1 62 58 A 15 15 0 0 1 32 58"
        stroke="url(#bdm-grad)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
