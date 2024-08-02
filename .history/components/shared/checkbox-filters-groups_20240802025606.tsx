import React from 'react';

interface Props {
    className?: string;
}

export const CheckboxFiltersGroups: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white shadow-lg shadow-black/5 z-10', className)}>
    </div>
  );
};

