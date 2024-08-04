'use client'

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

interface Props {
    className?: string;
}

const categories = ['Pizzas', 'Sides', 'Drinks', 'Desserts', 'Salads',]
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId); 
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                categories.map((category,index) => (    
                    <a className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5",
                        index === activeIndex && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )} key={index}>
                        <button>{category}</button>
                    </a>

                ))
            }
        </div>
    );
};