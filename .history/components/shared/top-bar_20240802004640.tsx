import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from 'postcss';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';

interface Props {

}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white shadow-lg shadow-black/5 z-10', className)}>
        <Container className>
            <Categories />
            <SortPopup />
        </Container>
    </div>
  );
};

