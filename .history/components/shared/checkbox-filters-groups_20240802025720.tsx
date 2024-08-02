import React from 'react';

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    className?: string;
}

export const CheckboxFiltersGroups: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>

    </div>
  );
};

