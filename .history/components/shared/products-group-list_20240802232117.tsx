import react from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';

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

            <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
            {items.map((item, i) => (
                <ProductCard
                    key={item.id}
                    name={item.id}
                    id={item}
                    imageUrl="https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp"
                    price={390}
                />
            ))}
            </div>
        </div>
    );
}