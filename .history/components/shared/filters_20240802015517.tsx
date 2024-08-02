import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import 

interface Props {
    className?: string;
}

export const Fiters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <Title text="Filters" size="sm" className="mb-5 font-bold" />

        <div className='flex flex-col gap-4'>
            <FilterCheckBox text="You can collect" value="1" />
            <FilterCheckBox text="New in store" value="2" />
        </div>
    </div>
  );
};

