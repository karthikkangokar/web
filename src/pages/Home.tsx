import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Features } from '../components/sections/Features';
import { Integrations } from '../components/sections/Integrations';
import { Partners } from '../components/sections/Partners';
import { Testimonials } from '../components/sections/Testimonials';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Integrations />
      <Partners />
      <Testimonials />
    </>
  );
};
