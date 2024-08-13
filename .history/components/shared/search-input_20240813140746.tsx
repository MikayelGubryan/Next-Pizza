'use client'

import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import React from 'react';

interface Props {
    className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    const [focused, setFocused] = 

    return (
        <div className={cn("flex rounded-2xl flex-1 justify-between relative h-11",className)}>
            <Search className="absolute left-3 h-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search Pizza ..." className="rounded-2xl bg-gray-100 outline-none w-full pl-11"/>
        </div>
    )
};