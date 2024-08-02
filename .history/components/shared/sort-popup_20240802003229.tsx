import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex items-center gap-1 bg-gray-50 h-[52px] rounded-2xl cursor-pointer', className)}>
        A
    </div>
  );
};


