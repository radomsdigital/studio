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
              style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'hsl(var(--primary) / 0.8)', stopOpacity: 1 }}
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
              style={{ stopColor: 'hsl(var(--primary) / 0.8)', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        {/* Stylized L */}
        <path d="M30 30 L30 110 L90 110 L90 100 L40 100 L40 30 Z" fill="url(#grad1)" />
        
        {/* Briefcase */}
        <rect x="25" y="45" width="20" height="15" rx="2" fill="white" />
        <rect x="22" y="50" width="26" height="12" rx="2" fill="url(#grad1)" />
        <rect x="33" y="42" width="4" height="6" rx="1" fill="white" />


        {/* Handshake overlapping with L */}
        <path d="M45 110 C 60 110, 70 100, 80 90 L 95 90 C 110 90, 115 100, 115 110" fill="url(#grad2)" />
        <path d="M55 100 L 75 100 M60 105 L80 105" stroke="white" strokeWidth="2" />
        
        {/* Arrow and nodes */}
        <path d="M90 85 L110 65 L105 70 M110 65 L115 70" stroke="hsl(var(--accent))" strokeWidth="4" fill="none" />
        <circle cx="90" cy="85" r="3" fill="yellow" />
        <circle cx="100" cy="75" r="3" fill="yellow" />
        <circle cx="115" cy="80" r="3" fill="yellow" />
        <path d="M90 85 L100 75 L110 65" stroke="hsl(var(--accent))" strokeOpacity="0.5" strokeWidth="1.5" />
         <path d="M100 75 L115 80" stroke="hsl(var(--accent))" strokeOpacity="0.5" strokeWidth="1.5" />

      </svg>
      <span className="text-2xl font-bold text-foreground">LEYWOK</span>
    </div>
  );
}
