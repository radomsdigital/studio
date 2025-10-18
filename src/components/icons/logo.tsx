export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="grad1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: 'rgb(53, 94, 209)', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'rgb(96, 53, 209)', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="grad2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: 'rgb(96, 53, 209)', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'rgb(187, 53, 209)', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        {/* Briefcase */}
        <path
          d="M40 55 C35 55 35 50 40 50 L60 50 C65 50 65 55 60 55"
          fill="url(#grad1)"
        />
        <rect x="35" y="55" width="30" height="20" rx="3" fill="url(#grad1)" />
        <rect x="47" y="57" width="6" height="4" fill="white" />
        {/* Handshake and Arrow */}
        <path
          d="M50 80 C 50 100, 70 110, 85 110 C 100 110, 110 100, 110 80 C 110 95, 100 105, 85 105 C 70 105, 50 95, 50 80"
          fill="url(#grad2)"
        />
        <path
          d="M60 85 L70 75 M65 90 L75 80 M70 95 L80 85"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M85 75 L85 45 L80 50 M85 45 L90 50" stroke="#BF40BF" strokeWidth="4" fill="none" />
        <circle cx="85" cy="75" r="3" fill="#DFFF00" />
        <circle cx="100" cy="70" r="3" fill="#DFFF00" />
        <path d="M85 75 L100 70" stroke="#DFFF00" strokeWidth="1.5" />
        <circle cx="110" cy="80" r="3" fill="#DFFF00" />
        <path d="M100 70 L110 80" stroke="#DFFF00" strokeWidth="1.5" />
      </svg>
      <span className="text-xl font-bold text-foreground">Leywok</span>
    </div>
  );
}
