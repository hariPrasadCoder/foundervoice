import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Reframe } from './components/Reframe';
import { Services } from './components/Services';
import { WhyMe } from './components/WhyMe';
import { Process } from './components/Process';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"foundervoice"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Problem />
        <Reframe />
        <Services />
        <WhyMe />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

export default App;