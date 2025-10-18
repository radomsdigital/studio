import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
  height?: number;
  width?: number;
}

export function Logo({ className, showText = false, height = 80 , width = 120}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/leywok_logo.png"
        alt="Leywok Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
      {showText && (
        <span className="text-2xl font-bold text-foreground">Leywok</span>
      )}
    </div>
  );
}
