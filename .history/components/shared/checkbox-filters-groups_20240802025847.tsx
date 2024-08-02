import React from 'react';

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (items: Item[]) => void;
    className?: string;
}

export const CheckboxFiltersGroups: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>

    </div>
  );
};

