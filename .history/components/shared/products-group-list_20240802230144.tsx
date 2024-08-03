import react from 'react';

interface Props {
    title: string;
    items: any[];
    categoryId: number; 
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = (
    title, items, categoryId, className, 
) => {
    return (
        <div className={className}>
            
        </div>
    );
}