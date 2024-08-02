import { cn } from "@/lib/utils";
import React from "react";

interface Props {
    className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 ', className)}>

        </div>
    );
};