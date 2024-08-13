'use client'

import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import React from 'react';
import { useClickAway } from 'react-use';

interface Props {
    className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    const [focused, setFocused] = React.useState(false);
    const ref = React.useRef(null);

    useClickAway(ref, () => {
        console.log('OUTSIDE CLICKED');
      });

    return (
        <>
            {focused && <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30' />}
            <div 
                ref={ref}
                className={cn("flex rounded-2xl flex-1 justify-between relative h-11 z-30",className)}>
                <Search className="absolute left-3 h-5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                type="text" 
                placeholder="Search Pizza ..." 
                className="rounded-2xl bg-gray-100 outline-none w-full pl-11"
                onFocus={() => setFocused(true)}
                />
            </div>
        </>
    )
}