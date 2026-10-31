import React from "react";

export default function TechMatrixArch() {
  return (
    <div className="relative w-full overflow-hidden leading-none pointer-events-none select-none">
      <style>{`
        @keyframes laserSweepMove {
          0% {
            transform: translateX(-220px);
          }
          100% {
            transform: translateX(1660px);
          }
        }
        @keyframes nodePingRing {
          0% {
            r: 3.5;
            opacity: 0.9;
            stroke-width: 1.5;
          }
          60% {
            opacity: 0.35;
          }
          100% {
            r: 13;
            opacity: 0;
            stroke-width: 0.5;
          }
        }
        @keyframes statusLedBlink {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 3px #06b6d4);
          }
          50% {
            opacity: 0.25;
            filter: none;
          }
        }

        .sweep-group {
          animation: laserSweepMove 7.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .ping-ring-1 {
          animation: nodePingRing 2.4s ease-out infinite;
          transform-origin: center;
        }
        .ping-ring-2 {
          animation: nodePingRing 2.4s ease-out infinite;
          animation-delay: 0.8s;
          transform-origin: center;
        }
        .ping-ring-3 {
          animation: nodePingRing 2.4s ease-out infinite;
          animation-delay: 1.6s;
          transform-origin: center;
        }
        .status-led {
          animation: statusLedBlink 1.8s ease-in-out infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 1440 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-28 sm:h-36 md:h-48 block"
        preserveAspectRatio="none"
      >
        <defs>
          {/* 1. Exact Clip Path: Conforms strictly to the upward white arch */}
          <clipPath id="archContourClip">
            <path d="M 0,160 L 1440,160 L 1440,80 Q 720,-10 0,80 Z" />
          </clipPath>

          {/* 2. Micro-Dot Matrix Pattern (Neutral Subtle Blueprint Slate) */}
          <pattern
            id="matrixDotPattern"
            x="0"
            y="0"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="11" cy="11" r="1.15" fill="#94a3b8" opacity="0.32" />
          </pattern>

          {/* 3. Sweeping Radar Beam Gradient */}
          <linearGradient id="sweepBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="45%" stopColor="#06b6d4" stopOpacity="0.12" />
            <stop offset="70%" stopColor="#0284c7" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>

          {/* 4. Active Cyan Dot Pattern for the Laser Sweep Highlight */}
          <pattern
            id="matrixDotActive"
            x="0"
            y="0"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="11" cy="11" r="1.7" fill="#06b6d4" opacity="0.85" />
          </pattern>

          {/* 5. Mask for Active Dots tied to the sweep */}
          <mask id="sweepDotMask">
            <rect
              className="sweep-group"
              x="0"
              y="0"
              width="180"
              height="160"
              fill="url(#sweepBeamGrad)"
            />
          </mask>

          {/* 6. Soft glow filter */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base Pure White Solid Arch */}
        <path d="M 0,160 L 1440,160 L 1440,80 Q 720,-10 0,80 Z" fill="#ffffff" />

        {/* Group STRICTLY CLIPPED to the exact curve: Cannot bleed or spill outside */}
        <g clipPath="url(#archContourClip)">
          {/* A. Background Micro-Dot Grid across the full height */}
          <rect
            x="0"
            y="0"
            width="1440"
            height="160"
            fill="url(#matrixDotPattern)"
          />

          {/* B. Curved Telemetry Guidance Lines (Pulled further down into the lower half) */}
          <path
            d="M 0,126 Q 720,78 1440,126"
            stroke="#0284c7"
            strokeWidth="1"
            strokeOpacity="0.16"
            strokeDasharray="3 6"
          />
          <path
            d="M 0,144 Q 720,102 1440,144"
            stroke="#3b82f6"
            strokeWidth="0.9"
            strokeOpacity="0.12"
            strokeDasharray="4 8"
          />

          {/* C. Sweeping Radar / Laser Beam */}
          <g className="sweep-group">
            {/* Luminous Soft Beam Band */}
            <rect
              x="-90"
              y="0"
              width="180"
              height="160"
              fill="url(#sweepBeamGrad)"
            />
            {/* Laser Focal Line */}
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="160"
              stroke="#06b6d4"
              strokeWidth="1.2"
              strokeOpacity="0.35"
              filter="url(#softGlow)"
            />
          </g>

          {/* D. Illuminated Cyan Dots inside the beam */}
          <rect
            x="0"
            y="0"
            width="1440"
            height="160"
            fill="url(#matrixDotActive)"
            mask="url(#sweepDotMask)"
          />

          {/* E. Ambient Telemetry Nodes & Status Badges (Pulled well down into the lower area) */}

          {/* NODE 1 (Left): LATENCY < 10ms */}
          <g transform="translate(300, 132)">
            {/* Concentric Ping Ring */}
            <circle cx="0" cy="0" r="3.5" fill="none" stroke="#06b6d4" className="ping-ring-1" />
            {/* Solid Center Node */}
            <circle cx="0" cy="0" r="3" fill="#0284c7" />
            <circle cx="0" cy="0" r="1.3" fill="#ffffff" />
            {/* Micro Badge Card */}
            <rect
              x="-48"
              y="-25"
              width="96"
              height="17"
              rx="8.5"
              fill="#ffffff"
              stroke="#0284c7"
              strokeWidth="0.9"
              strokeOpacity="0.3"
              filter="drop-shadow(0 1px 3px rgba(2, 132, 199, 0.12))"
            />
            {/* Status LED */}
            <circle cx="-38" cy="-16.5" r="1.8" fill="#06b6d4" className="status-led" />
            {/* Text */}
            <text
              x="-31"
              y="-13"
              fill="#0369a1"
              fontSize="7"
              fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
              fontWeight="700"
              letterSpacing="0.04em"
            >
              LATENCY &lt; 10ms
            </text>
          </g>

          {/* NODE 2 (Center Crest): 99.99% NOMINAL - Pulled down to Y=120 */}
          <g transform="translate(720, 120)">
            {/* Concentric Ping Ring */}
            <circle cx="0" cy="0" r="3.5" fill="none" stroke="#06b6d4" className="ping-ring-2" />
            {/* Solid Center Node */}
            <circle cx="0" cy="0" r="3.2" fill="#0284c7" />
            <circle cx="0" cy="0" r="1.4" fill="#ffffff" />
            {/* Micro Badge Card */}
            <rect
              x="-54"
              y="-26"
              width="108"
              height="18"
              rx="9"
              fill="#ffffff"
              stroke="#0284c7"
              strokeWidth="1"
              strokeOpacity="0.35"
              filter="drop-shadow(0 2px 4px rgba(2, 132, 199, 0.15))"
            />
            {/* Status LED */}
            <circle cx="-43" cy="-17" r="2" fill="#06b6d4" className="status-led" />
            {/* Text */}
            <text
              x="-35"
              y="-13.5"
              fill="#0369a1"
              fontSize="7.5"
              fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
              fontWeight="700"
              letterSpacing="0.05em"
            >
              99.99% NOMINAL
            </text>
          </g>

          {/* NODE 3 (Right): CLOUD MESH: ACTIVE */}
          <g transform="translate(1140, 132)">
            {/* Concentric Ping Ring */}
            <circle cx="0" cy="0" r="3.5" fill="none" stroke="#06b6d4" className="ping-ring-3" />
            {/* Solid Center Node */}
            <circle cx="0" cy="0" r="3" fill="#0284c7" />
            <circle cx="0" cy="0" r="1.3" fill="#ffffff" />
            {/* Micro Badge Card */}
            <rect
              x="-56"
              y="-25"
              width="112"
              height="17"
              rx="8.5"
              fill="#ffffff"
              stroke="#0284c7"
              strokeWidth="0.9"
              strokeOpacity="0.3"
              filter="drop-shadow(0 1px 3px rgba(2, 132, 199, 0.12))"
            />
            {/* Status LED */}
            <circle cx="-46" cy="-16.5" r="1.8" fill="#06b6d4" className="status-led" />
            {/* Text */}
            <text
              x="-38"
              y="-13"
              fill="#0369a1"
              fontSize="7"
              fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
              fontWeight="700"
              letterSpacing="0.04em"
            >
              CLOUD MESH: ACTIVE
            </text>
          </g>

          {/* F. Geometric Crosshairs (Pulled down) */}
          {[
            [160, 134],
            [540, 116],
            [900, 116],
            [1280, 134],
          ].map(([cx, cy], idx) => (
            <g key={idx} transform={`translate(${cx}, ${cy})`} opacity="0.28">
              <line x1="-3.5" y1="0" x2="3.5" y2="0" stroke="#0284c7" strokeWidth="0.9" />
              <line x1="0" y1="-3.5" x2="0" y2="3.5" stroke="#0284c7" strokeWidth="0.9" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
