import react from 'react';

interface Props {
    title: string,
    
    className?: string
}

export const ProductsGroupList: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            
        </div>
    );
}