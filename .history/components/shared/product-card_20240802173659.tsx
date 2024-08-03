import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui/button';

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
    return (
        <div className={className}>
            <Link href={`/product/1${id}`}> 
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <Image className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
                </div> 

                <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />       

                <p className="text-sm text-gray-400">
                    Chick, mozarella, cheeze souce, tomato, onion, olives, red onion, jalapeno, red pepper,  
                </p>   

                <div className="flex justify-between items-center mt-4">
                    <span className='text-[20px]'>
                        from <b>{price} $</b>
                    </span>
                </div>

                <Button variant="outline" className="w-full mt-4">
                    Add to cart

                </Button>
            </Link>
        </div>
    );
}