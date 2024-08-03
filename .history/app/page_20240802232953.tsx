import { Categories, Container, Filters, SortPopup, Title } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import { TopBar } from '@/components/shared/top-bar';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className='flex gap-[60px]'>

          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList title='Pizzas' items={[{
                id: 1,
                name: 'Pizza Margherita',
                
              }]} categoryId={1} />
            </div>
          </div>

        </div>
      </Container> 
    </>
  );
}
