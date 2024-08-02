import React from 'react';
import { FilterCheckboxProps } from './filter-checkbox';

type Item = FilterCheckboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroups: React.FC<Props> = (
    {
        title,
        items,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = "Search... ",
        onChange,
        defaultValue,
        className
    }
) => {
  return (
    <div className={className}>
        <p>{title}</p>
    </div>
  );
};

