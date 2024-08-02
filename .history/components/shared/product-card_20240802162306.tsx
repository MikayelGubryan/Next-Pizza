import React from 'react';

interface Props {
    className?: string;
}

export const ProductCard: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('w-full bg-white rounded-2xl shadow-lg shadow-black/5 overflow-hidden', className)}>
    
        </div>
    );
}