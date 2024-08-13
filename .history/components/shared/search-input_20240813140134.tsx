import { Search } from 'lucide-react';
import React from 'react';

interface Props {
    className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    return (
        <div className='flex rounded-2xl flex-1 justify-between relative h-11'>
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
    )
};