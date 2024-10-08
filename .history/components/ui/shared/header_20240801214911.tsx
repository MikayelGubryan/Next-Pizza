import React from 'react';
import {cn} from "@/lib/utils";
import { Container } from './container';

interface Props {
    className?: string
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-b ',className)}>
            <Container className="flex items-center justify-between py-8">

            <div>
                <Image src="/logo.png" alt="Logo" width={120} height={120} />
            </div>


            </Container>
        </header>
    );
}