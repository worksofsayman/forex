'use client';

import React from 'react';

import Banner from '../../components/Banner';
import Feature from '../../components/Feature';
import NftCard from '../../components/NftCard';
import { Roadmap } from '../../components/Roadmap';
import BloodlinesGamePage from '../../components/GamingPage';
import Council from '../../components/Council';
import { Faq } from '../../components/Faq';
import { Footer } from '../../components/Footer';

export default function Home() {
  return (
    <>
      {/* Animated Background Elements */}
      <div className="bubbles">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="bubble" key={i} />
        ))}
      </div>

      <div className="sparkles">
        {Array.from({ length: 12 }).map((_, i) => (
          <div className="sparkle" key={i} />
        ))}
      </div>

      <div className="floating-particles">
        {Array.from({ length: 5 }).map((_, i) => (
          <div className="particle" key={i} />
        ))}
      </div>

      {/* Main Sections */}
      <Banner />
      <Feature />
      <NftCard />
      <Roadmap />
      <BloodlinesGamePage />
      <Council />
      <Faq />
      <Footer />
    </>
  );
}
