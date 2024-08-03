import react from 'react';
import { Title } from './title';

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
            <Title text={title} size="lg" className="mb-5 font-extrabold" />

            <div className="grid grid-cols-3 gap-[50px]">

            </div>
        </div>
    );
}