import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Reframe } from './components/Reframe';
import { Services } from './components/Services';
import { WhyMe } from './components/WhyMe';
import { Process } from './components/Process';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
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