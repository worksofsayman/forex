'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import fimg from '../assets/f.png';

interface CouncilMember {
  title: string;
  desc: string;
  delay: number;
}

const Council: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const councilMembers: CouncilMember[] = [
    {
      title: 'The Lorekeeper',
      desc: 'Writes your backstory',
      delay: 0,
    },
    {
      title: 'The Chainmaster',
      desc: 'Handles blockchain mechanics',
      delay: 100,
    },
    {
      title: 'The Questmaker',
      desc: 'Designs your missions',
      delay: 200,
    },
    {
      title: 'The Vanguard',
      desc: 'Leads the community charge',
      delay: 300,
    },
  ];

  return (
    <section className="council-section text-white py-5" data-aos="fade-up">
      <div className="container text-center">
        <h2 className="fw-bold display-5 text-start" data-aos="fade-right">
          The Council
        </h2>
        <p className="text-white-50 mb-5 text-start" data-aos="fade-left">
          Game Devs & Worldbuilders
        </p>

        <div className="row justify-content-center g-4">
          {councilMembers.map(({ title, desc, delay }, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div
                className="council-card p-4 rounded-4 text-center"
                data-aos="zoom-in"
                data-aos-delay={delay}
              >
                <Image
                  src={fimg}
                  alt="Council Icon"
                  width={60}
                  height={60}
                  className="mb-4"
                  style={{ objectFit: 'contain' }}
                />

                <h5 className="fw-bold">{title}</h5>
                <p className="text-white-50 mb-0">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <button
            className="btn btn-light mt-5 px-4 py-2"
            style={{ color: 'purple' }}
          >
            Mint your NFT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Council;
