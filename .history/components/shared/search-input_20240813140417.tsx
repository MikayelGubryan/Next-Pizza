import { Search } from 'lucide-react';
import React from 'react';

interface Props {
    className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    return (
        <div className='flex rounded-2xl flex-1 justify-between relative h-11'>
            <Search className="absolute left-3 h-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search" className="rounded-2xl bg-gray-50 outline-none w-full pl-11" search/>
        </div>
    )
};