import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui/input';


interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <Title text="Filters" size="sm" className="mb-5 font-bold" />

        <div className='flex flex-col gap-4'>
            <FilterCheckbox text="You can collect" value="1" />
            <FilterCheckbox text="New in store" value="2" />
        </div>

        <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
          <p className='font-bold mb-3'>The cost from to:</p>

          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" min={100} max={100} placeholder="30000" />
        </div>
    </div>
  );
};

