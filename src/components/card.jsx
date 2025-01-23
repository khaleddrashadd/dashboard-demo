// components/ui/card.tsx

import { cn } from '@/lib/utils';

export function Card({ className, ...props }) {
  //box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.16);
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-md h-full',
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return (
    <div
      className={`flex flex-col border-b mb-4 text-xl ${className}`}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }) {
  return (
    <div
      className={cn(
        `text-lg font-semibold leading-none tracking-tight`,
        className
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return (
    <div
      className={className}
      {...props}
    />
  );
}
