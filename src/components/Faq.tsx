'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import arrowDown from '../assets/arrowDown.png';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const Faq: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const collapseElements = document.querySelectorAll<HTMLElement>('.collapse');
    collapseElements.forEach((collapse) => {
      collapse.addEventListener('show.bs.collapse', (e: any) => {
        const header = e.target?.previousElementSibling as HTMLElement;
        const arrow = header?.querySelector('.faq-arrow');
        arrow?.classList.add('rotate');
      });
      collapse.addEventListener('hide.bs.collapse', (e: any) => {
        const header = e.target?.previousElementSibling as HTMLElement;
        const arrow = header?.querySelector('.faq-arrow');
        arrow?.classList.remove('rotate');
      });
    });
  }, []);

  const faqs: FaqItem[] = [
    {
      id: 'collapseOne',
      question: 'What is Forixo?',
      answer:
        'Forixo is a blockchain-based gaming platform that combines strategic gameplay with NFT ownership. Players can collect, trade, and battle unique digital warriors in a decentralized ecosystem, offering rewards and progression through engaging mechanics.',
    },
    {
      id: 'collapseTwo',
      question: 'How do I start?',
      answer:
        'To start with Forixo, create an account on our platform, connect a compatible crypto wallet (e.g., MetaMask), and acquire your first NFT warrior. Follow the in-game tutorial to learn the basics of battling and trading.',
    },
    {
      id: 'collapseThree',
      question: 'What’s a ‘layered reveal’?',
      answer:
        "A 'layered reveal' is a unique feature in Forixo where NFT warriors unlock new visual traits, abilities, or lore as they level up or achieve milestones. This progressive reveal enhances the value and uniqueness of each warrior.",
    },
    {
      id: 'collapseFour',
      question: 'Can I sell or upgrade my warrior?',
      answer:
        'Yes, you can sell your warrior on the Forixo marketplace or upgrade it using in-game resources. Upgrades improve stats, abilities, or aesthetics, while selling allows you to trade with other players for cryptocurrency or other NFTs.',
    },
    {
      id: 'collapseFive',
      question: 'How do I level up?',
      answer:
        'Level up your warrior by participating in battles, completing missions, or staking resources in the Forixo ecosystem. Each level-up unlocks new abilities, layered reveals, or boosts to your warrior’s stats, enhancing its performance.',
    },
  ];

  return (
    <div className="faq-container" data-aos="fade-up">
      <h1 className="faq-title text-start" data-aos="fade-right">
        FAQs
      </h1>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, idx) => (
          <div
            key={faq.id}
            className="faq-card"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div
              className="faq-header"
              data-bs-toggle="collapse"
              data-bs-target={`#${faq.id}`}
              aria-expanded="false"
              aria-controls={faq.id}
              role="button"
            >
              <span>{faq.question}</span>
              <Image src={arrowDown} alt="Toggle arrow" className="faq-arrow" />
            </div>
            <div id={faq.id} className="collapse" data-bs-parent="#faqAccordion">
              <div className="card-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
