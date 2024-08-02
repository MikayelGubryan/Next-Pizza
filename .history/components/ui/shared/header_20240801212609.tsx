import React from 'react';

interface Props {

}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-button ',className)}>
            Header
        </header>
    );
}