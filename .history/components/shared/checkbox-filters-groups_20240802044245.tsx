'use client';


import React from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui/input';

type Item = FilterCheckboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
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

  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const list = showAll ? items : defaultItems;

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement) => {
    setSearchValue(e.target.value);
  }
 
  return (
    <div className={className}>
        <p className='font-bold mb-3'>{title}</p>

       {showAll && (
        <div className="mb-5">
            <Input onChange={e => onChangeSearchInput(e..value)} placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" />
         </div>
       )}

        
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(it) => (it)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neuteral-100 mt-4' : ''}> 
          <button
            className="text-primary mt-3"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Hide" : "Show more"}
          </button>
        </div>

      )}
        
    </div>
  );
};

