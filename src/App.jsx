import { Footer, Hero, PopulerProducts, Services, SpecialOffers, Subscribe, SuperQulity, CustomerReviews } from './sections';
import { Nav } from './components';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopulerProducts />
    </section>
    <section className="padding">
      <SuperQulity />
    </section> 
    <section className="py-10 padding-x">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-pail-blue padding">
      <CustomerReviews />
    </section>
    <section className="w-full py-16 padding-x sm:py-32">
      <Subscribe />
    </section><section className="pb-8 bg-black padding-x padding-t">
      <Footer />
    </section>
  </main>
);

export default App;