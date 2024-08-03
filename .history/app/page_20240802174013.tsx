import { Categories, Container, Filters, SortPopup, Title } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { TopBar } from '@/components/shared/top-bar';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className='flex gap- [60px]'>

          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductCard 
              id={1} 
              name="Pizza"
              price={10} imageUrl="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full"  />
            </div>
          </div>

        </div>
      </Container> 
    </>
  );
}
