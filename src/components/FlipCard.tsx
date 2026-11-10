'use client';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

export function FlipCard({ frontContent, backContent, className }: FlipCardProps) {
  return (
    <div className={cn('group w-full [perspective:2000px]', className)}>
      <div className="relative h-full w-full rounded-none border-none shadow-none transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden]">
          <div className="flex h-full w-full flex-col items-center justify-center text-center">
            {frontContent}
          </div>
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex h-full w-full flex-col items-center justify-center bg-primary text-primary-foreground text-center">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}