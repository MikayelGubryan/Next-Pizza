import react from 'react';

interface Props {
    title: string,
    products: CategoryProducts['products'],
    className?: string,
    listClassName?: string,
    
}

export const ProductsGroupList: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            
        </div>
    );
}