"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserCircle, FaTimes, FaSkullCrossbones } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PirateFooter from "../footer/page";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import WalletConnectedContent from "../../components/WalletConnectedContent";
import OceanWaves from "../../components/OceanWaves";

interface AboutProps {
    logo: string;
    fimg: string;
}

const About: React.FC<AboutProps> = ({ logo, fimg }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const wallets = [
        new PhantomWalletAdapter(),
    ];

    const endpoint = clusterApiUrl('devnet');

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <div className="position-relative text-white min-vh-100 overflow-hidden pirate-theme-bg">
                        <OceanWaves />

                        {/* Pirate Ship Silhouette */}
                        <div className="position-absolute bottom-0 end-0" style={{ zIndex: 1, opacity: 0.15 }}>
                            <svg width="400" height="200" viewBox="0 0 400 200">
                                <path d="M20,150 Q100,50 180,150 Q260,250 340,150 L340,200 L20,200 Z" fill="#000" />
                                <path d="M100,50 L120,20 L140,50" fill="none" stroke="#000" strokeWidth="3" />
                            </svg>
                        </div>

                        {/* Foreground Content */}
                        <div className="position-relative" style={{ zIndex: 2 }}>
                            {/* Navbar */}
                            <nav className="navbar navbar-expand-md navbar-dark px-4 py-3 pirate-navbar" style={{
                                background: 'linear-gradient(to right, rgba(0, 20, 40, 0.95), rgba(0, 40, 80, 0.9))',
                                borderBottom: '2px solid rgba(248, 197, 55, 0.4)',
                                boxShadow: '0 2px 15px rgba(0, 91, 179, 0.3)',
                                position: 'relative',
                                zIndex: 1000
                            }}>
                                {/* Ocean wave effect at bottom */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '10px',
                                    background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 120\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\' opacity=\'.25\' fill=\'%23f8c537\'%3E%3C/path%3E%3Cpath d=\'M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z\' opacity=\'.5\' fill=\'%23f8c537\'%3E%3C/path%3E%3Cpath d=\'M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z\' fill=\'%23f8c537\'%3E%3C/path%3E%3C/svg%3E")',
                                    backgroundSize: 'cover',
                                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
                                }}></div>

                                <div className="container-fluid">
                                    <Link className="navbar-brand" href="/">
                                        <div className="d-flex align-items-center">
                                            <FaSkullCrossbones size={28} className="me-2" style={{
                                                color: '#f8c537',
                                                filter: 'drop-shadow(0 0 2px rgba(248, 197, 55, 0.7))',
                                                transform: 'rotate(-15deg)'
                                            }} />
                                            <span className="pirate-logo-text" style={{
                                                fontSize: '1.8rem',
                                                background: 'linear-gradient(to right, #f8c537, #ffdd7a)',
                                                WebkitBackgroundClip: 'text',
                                                backgroundClip: 'text',
                                                color: 'transparent',
                                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                                letterSpacing: '1px'
                                            }}>
                                                Forex
                                            </span>
                                        </div>
                                    </Link>

                                    <button className="navbar-toggler" onClick={toggleMenu} style={{
                                        borderColor: 'rgba(248, 197, 55, 0.5)'
                                    }}>
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="d-none d-md-flex collapse navbar-collapse justify-content-between">
                                        <ul className="navbar-nav mx-auto text-center gap-md-3">
                                            {['Home', 'About', 'Collection', 'Blogs', 'Pricing'].map((item) => (
                                                <li className="nav-item" key={item}>
                                                    <Link href={`/${item.toLowerCase()}`} className="nav-link pirate-nav-link" style={{
                                                        color: '#e0e0e0',
                                                        fontWeight: 500,
                                                        position: 'relative',
                                                        padding: '0.5rem 1rem',
                                                        transition: 'all 0.3s ease',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '1px',
                                                        fontSize: '0.9rem'
                                                    }}>
                                                        {item}
                                                        <span style={{
                                                            position: 'absolute',
                                                            bottom: 0,
                                                            left: '50%',
                                                            transform: 'translateX(-50%)',
                                                            width: 0,
                                                            height: '2px',
                                                            background: '#f8c537',
                                                            transition: 'width 0.3s ease'
                                                        }}></span>
                                                        <style jsx>{`
                .pirate-nav-link:hover {
                  color: #f8c537 !important;
                }
                .pirate-nav-link:hover span {
                  width: 70%;
                }
              `}</style>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <WalletConnectedContent />
                                    </div>
                                </div>
                            </nav>

                            {/* Mobile Menu */}
                            <AnimatePresence>
                                {isMenuOpen && (
                                    <motion.div
                                        className="mobile-menu-container"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: 0 }}
                                        exit={{ x: "-100%" }}
                                    >
                                        <button onClick={toggleMenu} className="close-menu-btn">
                                            <FaTimes size={24} />
                                        </button>
                                        <ul className="mobile-nav-links">
                                            {['Home', 'About', 'Collection', 'Blogs', 'Pricing'].map((item) => (
                                                <li key={item}>
                                                    <Link href={`/${item.toLowerCase()}`} className="mobile-nav-link">
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <WalletConnectedContent />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Main Content */}
                            <div className="container py-5" data-aos="fade-up">
                                <div className="row align-items-center">
                                    <div className="col-md-6 order-2 order-md-1">
                                        <h1 className="pirate-main-title">About the Pirate's Life</h1>
                                        <p className="pirate-subtitle">Discover the Secrets of the Seven Seas</p>
                                        <p className="pirate-description">
                                            Our NFT project is a universe of 10,000 unique digital warriors, each with distinct traits and abilities. Built on the blockchain, these collectibles represent a fusion of art, technology, and community. Join a vibrant ecosystem where collectors, creators, and enthusiasts shape the future of the Realm.
                                        </p>
                                        <motion.button
                                            className="pirate-cta-btn"
                                            whileHover={{ y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            JOIN THE CREW
                                        </motion.button>
                                    </div>
                                    <div className="col-md-6 order-1 order-md-2">
                                        <div className="pirate-image-container">
                                            <Image
                                                src={fimg || "/logo.png"}  // Fallback to default image
                                                alt="Pirate NFT"
                                                width={350}
                                                height={250}
                                                className="pirate-nft-image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PirateFooter />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default About;