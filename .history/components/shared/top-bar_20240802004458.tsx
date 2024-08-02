import React from 'react';

interface Props {

}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white shadow-lg shadow-black/5 z-10', className)}>
            <Categories />
            <SortPopup />
    </div>
  );
};

