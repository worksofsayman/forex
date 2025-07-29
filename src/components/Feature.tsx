'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import rectangle37 from '@/assets/Rectangle.png'; // Adjust path if alias is different

const Feature: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="main-container">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-7 col-md-8 col-12" data-aos="fade-right">
            <h1 className="main-title mb-5">Game Lore: The Realm of Forixo</h1>

            <div className="content-card">
              <p className="lore-text">
                In a time beyond time, AI gods forged a world split by war and code.
                Kingdoms rose. Bloodlines battled. The strongest ruled. The weakest...
              </p>

              <p className="secondary-text">
                Now, 10,000 warriors rise again: reborn on Solana. You are one of them.
              </p>

              <div className="action-buttons">
                {[
                  'Claim your warrior',
                  'Join a bloodline',
                  'Conquer quests',
                ].map((text, i) => (
                  <div
                    key={text}
                    className="action-item"
                    data-aos="fade-up"
                    data-aos-delay={100 * (i + 1)}
                  >
                    <div className="action-dot"></div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-4 col-12 mt-4 mt-md-0"
            data-aos="fade-left"
          >
            <div className="book-container d-flex justify-content-center">
              <Image
                src={rectangle37}
                alt="Lore Book"
                className="img-fluid"
                style={{ height: '700px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
