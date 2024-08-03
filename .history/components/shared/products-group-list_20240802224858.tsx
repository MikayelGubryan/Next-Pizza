import react from 'react';

interface Props {
    title: string,
    products: Categ
    className?: string
}

export const ProductsGroupList: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            
        </div>
    );
}