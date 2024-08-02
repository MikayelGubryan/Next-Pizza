import React from 'react';
import {cn} from "@/lib/utils
import { Container } from 'postcss';

interface Props {
    className?: string
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-b ',className)}>
            <Container >

            </Container>
        </header>
    );
}