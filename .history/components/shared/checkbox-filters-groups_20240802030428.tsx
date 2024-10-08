import React from 'react';
import { FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui/input';

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
        <p className='font-bold mb-3'>{title}</p>

        <div className="mb-5">
          <Input placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" />
        </div>
        
    </div>
  );
};

