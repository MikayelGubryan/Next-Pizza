import React from 'react';

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    className?: string;
}

export const CheckboxFiltersGroups: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>

    </div>
  );
};

