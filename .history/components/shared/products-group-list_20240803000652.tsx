'use client';

import React, { useEffect } from 'react';
import { useIntersection } from 'react-use';

import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';

interface Props {
    title: string;
    items: any[];
    categoryId: number; 
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
    title, items, categoryId, className, listClassName
}) => {

    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            console.log(title, categoryId)
        }
    },[intersection?.isIntersecting, title, categoryId])

    return (
        <div className={className}> 
            <Title text={title} size="lg" className="mb-5 font-extrabold" />

            <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
            {items.map((item, i) => (
                <ProductCard
                    id={item.id}
                    key={item.id}
                    name={item.id}
                    imageUrl={item.imageUrl}
                    price={item.items[0].price}
                />
            ))}
            </div>
        </div>
    );
}