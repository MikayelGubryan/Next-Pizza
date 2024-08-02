'use '

import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui/input';
import { RangeSlider } from './range-Slider';
import { CheckboxFiltersGroups } from './checkbox-filters-groups';


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
          <div className='flex gap-3 mb-5'> 
            <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
            <Input type="number" min={100} max={1000} placeholder="1000" />
          </div>

          <RangeSlider min={0} max={1000} step={10} value={[0,1000]}/>
        </div>

        <CheckboxFiltersGroups 
          title='Ingredients'
          className='mt-5'
          limit={6}
          defaultItems={[
            { text: "Tomato", value: "1" },
            { text: "Cheese", value: "2" },
            { text: "Mushroom", value: "3" },
            { text: "Onion", value: "4" },
          ]}
          items={[
            { text: "Tomato", value: "1" },
            { text: "Cheese", value: "2" },
            { text: "Mushroom", value: "3" },
            { text: "Onion", value: "4" },
          ]}
        
        />
    </div>
  );
};

