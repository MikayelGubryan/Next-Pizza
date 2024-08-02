import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
}

export const Fiters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white shadow-lg shadow-black/5 z-10', className)}>
    </div>
  );
};

