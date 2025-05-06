'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Apply from '@/components/sections/Apply';
import Education from '@/components/sections/Education';
import Competition from '@/components/sections/Competition';
import Location from '@/components/sections/Location';
import Contact from '@/components/sections/Contact';
import Faq from '@/components/sections/Faq';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Apply />
        <Education />
        <Competition />
        <Location />
        <Contact />
        <Faq />
      </main>
      
      <Footer />
    </>
  );
}