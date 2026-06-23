type LogoVariant = "navbar-light" | "navbar-dark" | "full-light" | "full-dark";

const NAVY = "#1B3461";
const GOLD = "#C4A57A";

function VHMonogram({
  navyColor,
  goldColor,
  width,
  height,
}: {
  navyColor: string;
  goldColor: string;
  width: number;
  height: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 110 82"
      fill="none"
      aria-hidden="true"
    >
      {/* V */}
      <polyline
        points="2,14 34,74 66,14"
        stroke={navyColor}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* H – left vertical */}
      <line
        x1="64"
        y1="14"
        x2="64"
        y2="74"
        stroke={goldColor}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* H – right vertical (extends above) */}
      <line
        x1="90"
        y1="0"
        x2="90"
        y2="74"
        stroke={goldColor}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* H – crossbar */}
      <line
        x1="64"
        y1="40"
        x2="90"
        y2="40"
        stroke={goldColor}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HouseIcon({
  navyColor,
  goldColor,
}: {
  navyColor: string;
  goldColor: string;
}) {
  return (
    <svg
      width="82"
      height="40"
      viewBox="0 0 100 46"
      fill="none"
      aria-hidden="true"
    >
      {/* House body */}
      <rect x="20" y="22" width="60" height="20" stroke={navyColor} strokeWidth="1.4" />
      {/* Roof */}
      <polyline
        points="14,22 50,4 86,22"
        stroke={navyColor}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Chimney */}
      <rect x="66" y="9" width="9" height="13" stroke={goldColor} strokeWidth="1.2" />
      {/* Window frame */}
      <rect x="34" y="27" width="20" height="15" stroke={goldColor} strokeWidth="1.1" />
      {/* Window horizontal divider */}
      <line x1="34" y1="34.5" x2="54" y2="34.5" stroke={goldColor} strokeWidth="0.9" />
      {/* Window vertical divider */}
      <line x1="44" y1="27" x2="44" y2="42" stroke={goldColor} strokeWidth="0.9" />
      {/* Wave 1 */}
      <path
        d="M4 44 Q27 39 50 44 Q73 49 96 44"
        stroke={navyColor}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Wave 2 */}
      <path
        d="M10 47 Q33 42 50 47 Q67 52 90 47"
        stroke={navyColor}
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

export default function Logo({
  variant = "navbar-light",
  className = "",
}: {
  variant?: LogoVariant;
  className?: string;
}) {
  const isLight = variant.includes("light");
  const isFull = variant.includes("full");
  const navyColor = isLight ? "#FFFFFF" : NAVY;
  const goldColor = GOLD;

  if (isFull) {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <VHMonogram navyColor={navyColor} goldColor={goldColor} width={110} height={82} />
        <div className="flex items-baseline gap-3 mt-2">
          <span
            className="text-[13px] font-light uppercase tracking-[0.2em]"
            style={{ color: navyColor }}
          >
            VERBANIA
          </span>
          <span
            className="text-[13px] font-light uppercase tracking-[0.2em]"
            style={{ color: goldColor }}
          >
            HOLIDAY
          </span>
        </div>
        <HouseIcon navyColor={navyColor} goldColor={goldColor} />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <VHMonogram navyColor={navyColor} goldColor={goldColor} width={46} height={36} />
      <div className="flex flex-col leading-none">
        <span
          className="text-[11px] font-light uppercase tracking-[0.22em]"
          style={{ color: navyColor }}
        >
          VERBANIA
        </span>
        <span
          className="text-[9px] font-light uppercase tracking-[0.28em] mt-[3px]"
          style={{ color: goldColor }}
        >
          HOLIDAY
        </span>
      </div>
    </div>
  );
}
