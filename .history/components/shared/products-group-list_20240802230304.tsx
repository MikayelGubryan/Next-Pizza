import react from 'react';

interface Props {
    title: string;
    items: any[];
    categoryId: number; 
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
    title, items, categoryId, className, listClassName
}) => {
    return (
        <div className={className}> 
            <Title text={title} size="sm" className="mb-5 " />
        </div>
    );
}