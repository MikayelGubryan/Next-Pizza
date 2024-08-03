import react from 'react';

interface Props {
    title: string,
    products: CategoryProducts
    className?: string
}

export const ProductsGroupList: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            
        </div>
    );
}