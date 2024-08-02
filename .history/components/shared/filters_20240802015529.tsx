import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { FilterCheckBox } from './filter-checkbox';

interface Props {
    className?: string;
}

export const Fiters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <Title text="Filters" size="sm" className="mb-5 font-bold" />

        <div className='flex flex-col gap-4'>
            <FilterCheckbox text="You can collect" value="1" />
            <FilterCheckbox text="New in store" value="2" />
        </div>
    </div>
  );
};

