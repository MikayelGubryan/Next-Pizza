import React from 'react';

interface Props {
    className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('flex items-center gap-1 bg-gray-50 rounded-2xl h-[52px] px-4', className)}>
    )