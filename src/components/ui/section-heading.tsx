
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}

const SectionHeading = ({
  title,
  description,
  className,
  align = 'center',
  children,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        'space-y-4 mb-8',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;
