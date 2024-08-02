import { cn } from "@/lib/utils";
import React from "react";

interface Props {
    className?: string;
}

const categories = ['Pizzas', 'Sides', 'Drinks', 'Desserts', 'Salads',]
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                categories.map((category,index) => (    
                    <button key={category} className={cn('rounded-2xl px-3 py-1 text-sm font-medium', index === activeIndex ? 'bg-white text-black' : 'bg-gray-100 text-gray-500')}>{category}</button>

                ))
            }

        </div>
    );
};