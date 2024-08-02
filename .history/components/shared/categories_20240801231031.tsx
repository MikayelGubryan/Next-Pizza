import React from "react";

interface Props {
    className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
    return (
        <ul className={cn("grid grid-cols-1 gap-8 lg:grid-cols-2", className)}>
            <li>    