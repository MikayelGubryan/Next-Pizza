import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';

interface Props {
    className?: string;
}

export const Fiters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <Title text="Filters" size="sm" className="mb-5 font-bold" />

        <div className=''>

        </div>
    </div>
  );
};
