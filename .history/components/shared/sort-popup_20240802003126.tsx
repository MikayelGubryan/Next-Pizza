import React from 'react';

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex items-center gap-1 ', className)}></div>
  );
};


