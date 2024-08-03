import react from 'react';

interface Props {
    title: string,
    products: CategoryProducts['products'],
    className?: string,
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            
        </div>
    );
}