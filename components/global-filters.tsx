/**
 * GlobalFilters - 水墨禪風 SVG 濾鏡
 * 提供水墨暈染、毛筆邊緣、紙張紋理等視覺效果
 */
export const GlobalFilters = () => (
  <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
    <defs>
      {/* 水墨暈染濾鏡 */}
      <filter id="ink-spread">
        <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
        <feGaussianBlur stdDeviation="0.5" />
      </filter>
      
      {/* 毛筆邊緣濾鏡 */}
      <filter id="brush-stroke">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
      </filter>

      {/* 紙張紋理 */}
      <pattern id="paper-texture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100" height="100" filter="url(#noise)" opacity="0.08" />
      </pattern>
    </defs>
  </svg>
);
