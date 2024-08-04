'use client'

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

interface Props {
    className?: string;
}

const categories = [
        { id: 0, name: 'Pizzas', }
        { id: 1, name: 'Sides'},
    { id: 2, name: 'Drinks'},
    { id: 3, name: 'Desserts',}
    { id: 4, name: 'Salads',]

export const Categories: React.FC<Props> = ({ className }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);   
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                categories.map((category,index) => (    
                    <a className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5",
                        categoryActiveId === index && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )} 
                    key={index}>
                    <button>{category}</button>
                    </a>
                ))};
        </div>
    );
};