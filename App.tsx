import React, { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { booking } from './config/site';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Positioning } from './components/Positioning';
import { Process } from './components/Process';
import { Product } from './components/Product';
import { About } from './components/About';
import { StartHere } from './components/StartHere';
import { WhyLinkedIn } from './components/WhyLinkedIn';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    (async function () {
      const cal = await (getCalApi as (opts: { namespace: string; origin: string }) => ReturnType<typeof getCalApi>)({
        namespace: booking.namespace,
        origin: 'https://app.cal.com',
      });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <div className="bg-white min-h-screen text-ink selection:bg-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Positioning />
        <Process />
        <Product />
        <About />
        <StartHere />
        <WhyLinkedIn />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
