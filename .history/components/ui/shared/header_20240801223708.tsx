import React from 'react';
import {cn} from "@/lib/utils";
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../button';
import { User } from 'lucide-react';

interface Props {
    className?: string
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-b ',className)}>
            <Container className="flex items-center justify-between py-8">

            <div className='flex items-center gap-4'>
                <Image src="/logo.png" alt="Logo" width={35} height={35} />
                <div>
                    <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
                    <p className='text-sm text-gray-400 leading-3'>The best pizza</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Button variant="outline" className='flex items-center gap-1'>
                    <User size={16} />
                    Enter
                </Button>
            </div>

            <div>
                <Button className='group relative'>
                    <b>500 $</b>
                    <span />
                </Button>
            </div>


            </Container>
        </header>
    );
}