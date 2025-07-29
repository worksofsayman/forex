'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUserCircle, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton,
  WalletDisconnectButton,
} from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import logo from '@/assets/logo.png';
import fimg from '@/assets/itemslider.png';

const Banner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wallets = [new PhantomWalletAdapter()];
  const endpoint = clusterApiUrl('devnet');
  const { publicKey } = useWallet();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="banner-wrapper relative text-white min-h-screen overflow-hidden font-bebas">
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center blur-md scale-105 z-10" />
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/40" />

            <div className="relative z-20">
              <nav className="flex justify-between items-center px-4 py-3" data-aos="fade-down">
                <Link href="/">
                  <Image src={logo} alt="Logo" height={80} />
                </Link>
                <button
                  className="md:hidden text-white"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  <FaTimes size={24} />
                </button>

                <div className="hidden md:flex justify-between items-center w-full">
                  <ul className="flex gap-4 mx-auto">
                    {['Home', 'About', 'Collection', 'Blogs', 'Pricing'].map((item) => (
                      <li key={item}>
                        <Link href={`/${item.toLowerCase()}`} className="text-white">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-purple-500">
                    <FaUserCircle size={20} />
                    {publicKey ? (
                      <>
                        <span>
                          {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
                        </span>
                        <WalletDisconnectButton />
                      </>
                    ) : (
                      <WalletMultiButton />
                    )}
                  </div>
                </div>
              </nav>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    className="fixed md:hidden top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center z-[1000]"
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      className="absolute top-4 right-4"
                      onClick={toggleMenu}
                      aria-label="Close menu"
                    >
                      <FaTimes size={24} />
                    </button>
                    <ul className="flex flex-col gap-4 text-white">
                      {['Home', 'About', 'Collection', 'Blogs', 'Pricing'].map((item) => (
                        <li key={item}>
                          <Link href={`/${item.toLowerCase()}`} onClick={toggleMenu}>
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 mt-6 px-3 py-2 rounded-full border border-purple-500">
                      <FaUserCircle size={20} />
                      {publicKey ? (
                        <>
                          <span>
                            {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
                          </span>
                          <WalletDisconnectButton />
                        </>
                      ) : (
                        <WalletMultiButton />
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="container mx-auto py-10" data-aos="fade-up">
                <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                  <div
                    className="md:w-1/2"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <h1
                      className="text-5xl font-bold mb-4"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      Enter the Realm.
                    </h1>
                    <p
                      className="text-xl mb-4 text-gray-300"
                      data-aos="fade-left"
                      data-aos-delay="400"
                    >
                      Mint Your Warrior.
                    </p>
                    <p
                      className="mb-6 text-sm text-gray-300"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <strong className="text-white">10,000 digital warriors.</strong>
                      <br /> One world. Many factions. Claim your character. Change the future.
                    </p>
                    <div className="flex flex-col md:flex-row gap-3" data-aos="zoom-in" data-aos-delay="700">
                      <button className="bg-pink-700 hover:bg-pink-800 text-white px-6 py-2 rounded-full">
                        Mint Your NFT
                      </button>
                      <Link
                        href="/collection"
                        className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full text-center"
                      >
                        View Collection
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center" data-aos="fade-left" data-aos-delay="600">
                    <Image
                      src={fimg}
                      alt="NFT"
                      className="animate-bounce"
                      style={{ maxWidth: '70%' }}
                    />
                  </div>
                </div>
              </div>

              <style jsx>{`
                @keyframes bounce {
                  0%, 100% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(-20px);
                  }
                }
                .animate-bounce {
                  animation: bounce 3s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Banner;
