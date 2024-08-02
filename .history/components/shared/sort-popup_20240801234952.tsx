import React from "react";

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("relative", className)}>
            <Select
                defaultValue={sorts[0]}
                onValueChange={(value) => setSort(value)}   
            >