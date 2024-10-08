import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({ id,  }) => {
    return (
        <div className={className}>
            <Link href='/product/1'> 
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <Image className="w-[215px] h-[215px]" src={imageUrl} alt="Logo" />
                </div>            
            </Link>
        </div>
    );
}