import React from 'react';
import {cn} from "@/lib/utils

interface Props {

}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-b ',className)}>
            Header
        </header>
    );
}