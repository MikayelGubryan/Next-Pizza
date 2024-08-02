import Link from 'next/link';
import React from 'react';

interface Props {
    className?: string;
}

export const ProductCard: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Link href='/product/1'> 
            </Link>
        </div>
    );
}