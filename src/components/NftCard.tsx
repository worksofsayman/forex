'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

import liquidGlass from '@/assets/nft1.png';
import rectangle35 from '@/assets/nft2.png';
import rectangle36 from '@/assets/nft3.png';
import rectangle37 from '@/assets/nft4.png';

const NftCard: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="main-container mb-5">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <h1 className="hero-title">The Warriors - Your NFT</h1>
            <p className="hero-description">
              Each NFT is a warrior designed for battle, forged with:
              <br />- AI-generated traits: gear, sigils, armour, stance
              <br />- Hidden abilities, unlocked over time
              <br />- Tier-based bloodlines (OG1, OG2, OG3)
              <br />- 1/1 legendary drops with special powers
              <br />
              No two are the same. Each one tells a story.
            </p>
          </div>
        </div>

        <div className="warriors-grid">
          {/* Card 1 */}
          <div className="warrior-card" data-aos="zoom-in" data-aos-delay="0">
            <div className="glow-effect"></div>
            <Image
              src={liquidGlass}
              alt="AI Generated Warrior"
              className="warrior-image"
              placeholder="blur"
            />
            <div className="image-overlay"></div>
            <div className="trait-badge">
              <p className="trait-text">AI Generated Traits</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="warrior-card" data-aos="zoom-in" data-aos-delay="100">
            <div className="glow-effect"></div>
            <Image
              src={rectangle35}
              alt="Hidden Abilities Warrior"
              className="warrior-image"
              placeholder="blur"
            />
            <div className="image-overlay"></div>
            <div className="trait-badge">
              <p className="trait-text">Hidden Abilities</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="warrior-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="glow-effect"></div>
            <Image
              src={rectangle36}
              alt="Bloodline Warrior"
              className="warrior-image"
              placeholder="blur"
            />
            <div className="image-overlay"></div>
            <div className="trait-badge">
              <p className="trait-text">Tier Based Bloodlines</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="warrior-card" data-aos="zoom-in" data-aos-delay="300">
            <div className="glow-effect"></div>
            <Image
              src={rectangle37}
              alt="Legendary Warrior"
              className="warrior-image"
              placeholder="blur"
            />
            <div className="image-overlay"></div>
            <div className="trait-badge">
              <p className="trait-text">Legendary Drops</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
