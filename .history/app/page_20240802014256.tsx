import { Categories, Container, SortPopup, Title } from '@/components/shared';
import { TopBar } from '@/components/shared/top-bar';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14">
        <div className='flex gap- [60px]'>

          <div className='w-[250px]'>
            <Filters />
          </div>

          

        </div>
      </Container> 
    </>
  );
}
