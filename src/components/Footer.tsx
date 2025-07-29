'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaDiscord,
  FaTwitter,
  FaFileAlt,
  FaShieldAlt,
} from 'react-icons/fa';

export const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const links = [
    { icon: <FaDiscord size={20} />, text: 'Discord', href: '#' },
    { icon: <FaTwitter size={20} />, text: 'Twitter', href: '#' },
    { icon: <FaFileAlt size={20} />, text: 'Whitepaper', href: '#' },
    { icon: <FaShieldAlt size={20} />, text: 'Terms', href: '#' },
  ];

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center text-white">
      {/* Hero Content */}
      <div className="text-center mb-5" data-aos="fade-up">
        <h1 className="display-2 fw-bold mb-4">Forixo is not just a collection.</h1>
        <p className="display-11 mb-5" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          It's a battleground. It's your story.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div
        className="d-flex flex-wrap justify-content-center gap-3 mb-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {links.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="btn d-flex align-items-center gap-2 px-4 py-3 text-white text-decoration-none"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              backgroundColor: 'transparent',
              transition: 'background-color 0.3s ease',
            }}
            data-aos="zoom-in"
            data-aos-delay={300 + i * 100}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
            }}
          >
            {item.icon}
            <span className="fw-semibold">{item.text}</span>
          </a>
        ))}
      </div>

      {/* Divider */}
      <div
        className="w-75 mb-4"
        data-aos="fade-up"
        data-aos-delay="600"
        style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
      />

      {/* Branding */}
      <div className="text-center" data-aos="fade-up" data-aos-delay="700">
        <h2 className="display-2 fw-bold mb-3">Forixo</h2>
        <p className="fs-5" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          2025 Forixo. All rights reserved. Built for warriors, by warriors.
        </p>
      </div>
    </div>
  );
};
