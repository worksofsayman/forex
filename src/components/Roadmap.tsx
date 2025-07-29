'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  MdSportsMartialArts,
  MdPeople,
  MdLocalMall,
  MdCardGiftcard
} from 'react-icons/md';
import { GiSwordman as GiSword } from 'react-icons/gi';

interface RoadmapItem {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

export const Roadmap: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const roadmapData: RoadmapItem[] = [
    {
      id: 1,
      icon: <MdSportsMartialArts size={32} />,
      title: 'Chapter 1: Mint Begins',
      description: 'Whitelisted players claim their warrior before the world opens'
    },
    {
      id: 2,
      icon: <MdPeople size={32} />,
      title: 'Chapter 2: Reveal Ranks & Sigils',
      description: "Your warrior's faction, tier, and relics are unveiled in waves."
    },
    {
      id: 3,
      icon: <GiSword size={32} />,
      title: 'Chapter 3: Faction Quests Unlocked',
      description: 'Join missions. Win items. Compete in lore-driven challenges on Discord.'
    },
    {
      id: 4,
      icon: <MdLocalMall size={32} />,
      title: 'Chapter 4: Marketplace & Token Drops',
      description: 'Trade warriors, earn tokens, buy in-game artefacts.'
    },
    {
      id: 5,
      icon: <MdCardGiftcard size={32} />,
      title: 'Chapter 5: Real-World Loot & Community Upgrades',
      description: 'Claim merch, IRL access, and shape future chapters.'
    }
  ];

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center p-3 pb-5 roadmap"
      style={{
        background: 'linear-gradient(#ffffff0d 0%, #ffffff0d 100%)',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <div className="container-fluid" style={{ maxWidth: '1200px' }}>
        {/* Header */}
        <div className="text-center mb-5">
          <h1
            className="display-4 fw-bold text-white mb-1 text-start mt-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            data-aos="fade-right"
          >
            The Journey (Roadmap)
          </h1>
          <p
            className="text-white-50 mx-auto text-start"
            style={{
              maxWidth: '1200px',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.6'
            }}
            data-aos="fade-left"
          >
            Each NFT is a warrior designed for battle, forged with - AI-generated traits: gear, sigils, armour, stance - Hidden abilities, unlocked over
            time...
          </p>
        </div>

        {/* Roadmap Items */}
        <div className="row g-4">
          {roadmapData.map((item, index) => (
            <div key={item.id} className="col-12" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="d-flex flex-column flex-md-row gap-3 gap-md-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle text-white mt-3 r-icon"
                    style={{
                      width: 'clamp(60px, 8vw, 80px)',
                      height: 'clamp(60px, 8vw, 80px)',
                      background: 'linear-gradient(135deg, rgb(43 33 62), rgb(40, 6, 90))',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow-1">
                  <div
                    className="p-4 rounded-3 h-100"
                    style={{
                      background: 'linear-gradient(135deg, rgb(26 18 41), rgb(56 46 81))',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <h3 className="fw-bold text-white mb-2" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>
                      {item.title}
                    </h3>
                    <p className="text-white-50 mb-0" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', lineHeight: '1.5' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .container-fluid {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        .rounded-3 {
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
        }

        .rounded-3,
        .rounded-circle {
          transition: all 0.3s ease;
        }

        .rounded-3:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }

        .rounded-circle:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .gap-3 {
            gap: 1rem !important;
          }

          .p-4 {
            padding: 1.5rem !important;
          }
        }

        @media (max-width: 576px) {
          .gap-3 {
            gap: 0.75rem !important;
          }

          .p-4 {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
};
