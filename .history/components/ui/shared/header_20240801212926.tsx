import React from 'react';
import {cn} from "@/lib/utils

interface Props {
    className?: string
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <Container className={cn('border border-b ',className)}>
            Header
        </Container>
    );
}