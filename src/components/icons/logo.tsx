import { ClipboardCheck } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <ClipboardCheck className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold text-foreground">
        Leywok
      </span>
    </div>
  );
}
