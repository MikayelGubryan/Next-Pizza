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
            <div className='flex flex-col gap'>
              <ProductCard 
                id={0} 
                name="Pizza"
                price={10} 
                imageUrl="https://media.dodostatic.net/image/r:292x292/11EF49CDEA22CF4EA2DA4DDE0BA221FC.avif"   
              />
            </div>
          </div>

        </div>
      </Container> 
    </>
  );
}
