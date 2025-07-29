"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDiscord, FaTwitter, FaFileAlt, FaShieldAlt, FaAnchor, FaSkullCrossbones, FaBoxOpen, FaCompass, FaShip } from 'react-icons/fa';
import { GiOpenTreasureChest } from "react-icons/gi";
import { motion } from 'framer-motion';

const PirateFooter = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="min-vh-100 d-flex flex-column align-items-center justify-content-center text-white position-relative pirate-footer">
      {/* Ocean Animation */}
      <div className="ocean">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
      </div>
      
      {/* Floating Treasure Elements */}
      <motion.div 
        className="position-absolute" 
        style={{ top: '15%', left: '5%', zIndex: 2 }}
        animate={{ 
          y: [0, -15, 0],
          rotate: [-15, 5, -15]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <GiOpenTreasureChest size={60} style={{ color: 'rgba(218, 165, 32, 0.6)' }} />
      </motion.div>
      
      <motion.div 
        className="position-absolute" 
        style={{ top: '25%', right: '10%', zIndex: 2 }}
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 15, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <FaCompass size={50} style={{ color: 'rgba(248, 197, 55, 0.4)' }} />
      </motion.div>
      
      {/* Pirate Ship */}
      <div className="position-absolute bottom-0 start-0" style={{ zIndex: 2, opacity: 0.15 }}>
        <FaShip size={200} style={{ transform: 'rotate(10deg)' }} />
      </div>
      
      {/* Main Content */}
      <div className="text-center mb-5" data-aos="fade-up" style={{ zIndex: 3 }}>
        <h1 className="display-2 fw-bold mb-4 pirate-footer-title">
          Forex Bounty be not just treasure.
        </h1>
        <p className="display-11 mb-5 pirate-footer-subtitle">
          It's a pirate's life. It's yer legend.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="d-flex flex-wrap justify-content-center gap-4 mb-5" data-aos="fade-up" data-aos-delay="200" style={{ zIndex: 3 }}>
        {[
          { icon: <FaDiscord size={24} />, text: 'Discord' },
          { icon: <FaTwitter size={24} />, text: 'Twitter' },
          { icon: <FaFileAlt size={24} />, text: 'Whitepaper' },
          { icon: <FaShieldAlt size={24} />, text: 'Pirate Code' },
          { icon: <FaAnchor size={24} />, text: 'Terms' }
        ].map((item, i) => (
          <motion.a
            key={i}
            href="#"
            className="btn d-flex align-items-center gap-2 px-4 py-3 text-white text-decoration-none position-relative pirate-nav-btn"
            data-aos="zoom-in"
            data-aos-delay={300 + i * 100}
            whileHover={{ 
              y: -5,
              scale: 1.05,
              boxShadow: '0 8px 20px rgba(248, 197, 55, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}
            <span className="fw-semibold pirate-nav-text">{item.text}</span>
          </motion.a>
        ))}
      </div>

      {/* Divider */}
      <div className="w-75 mb-4 position-relative" data-aos="fade-up" data-aos-delay="600" style={{ zIndex: 3 }}>
        <div className="treasure-divider-line"></div>
        <div className="treasure-divider-text">
          X Marks the Spot
        </div>
      </div>

      {/* Brand Footer */}
      <div className="text-center" data-aos="fade-up" data-aos-delay="700" style={{ zIndex: 3 }}>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <FaSkullCrossbones size={40} className="mx-3" style={{ color: '#f8c537' }} />
          <h2 className="display-2 fw-bold m-0 pirate-brand-title">
            Forex Bounty
          </h2>
          <FaSkullCrossbones size={40} className="mx-3" style={{ color: '#f8c537' }} />
        </div>
        <p className="fs-5 mb-4 pirate-brand-quote">
          "Dead men tell no tales, but our NFTs will live forever on the blockchain. Join our crew and claim yer share of the plunder!"
        </p>
        <p className="fs-6 pirate-copyright">
          © {new Date().getFullYear()} Forex. All plunder reserved.
        </p>
      </div>

      <style jsx>{`
        .pirate-footer {
          background: linear-gradient(to bottom, #0a1a26, #0d2a3a);
          overflow: hidden;
          font-family: "'Pirata One', cursive";
        }
        
        .ocean {
          height: 100%;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          background: #015871;
          z-index: 1;
          overflow: hidden;
        }
        
        .wave {
          background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg') repeat-x;
          position: absolute;
          top: -198px;
          width: 6400px;
          height: 198px;
          animation: wave 10s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
          transform: translate3d(0, 0, 0);
        }
        
        .wave-1 {
          animation: wave 10s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
        }
        
        .wave-2 {
          top: -175px;
          animation: wave 10s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite;
          opacity: 0.7;
        }
        
        @keyframes wave {
          0% { margin-left: 0; }
          100% { margin-left: -1600px; }
        }
        
        .pirate-footer-title {
          color: #f8c537;
          font-size: 4.5rem;
          text-shadow: 3px 3px 6px rgba(0,0,0,0.7);
          letter-spacing: 2px;
        }
        
        .pirate-footer-subtitle {
          color: rgba(168, 218, 220, 0.9);
          font-size: 2rem;
          letter-spacing: 1px;
        }
        
        .pirate-nav-btn {
          border: 2px solid rgba(248, 197, 55, 0.5);
          border-radius: 10px;
          background: rgba(10, 30, 50, 0.4);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(5px);
          min-width: 180px;
          justify-content: center;
        }
        
        .pirate-nav-text {
          font-size: 1.2rem;
        }
        
        .treasure-divider-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(to right, transparent, #f8c537, transparent);
          box-shadow: 0 0 10px rgba(248, 197, 55, 0.7);
        }
        
        .treasure-divider-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #0a1a26;
          padding: 0 20px;
          font-family: "'Pirata One', cursive";
          color: #f8c537;
          font-size: 1.2rem;
        }
        
        .pirate-brand-title {
          color: #f8c537;
          font-family: "'Pirata One', cursive";
          text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
          font-size: 3.5rem;
          letter-spacing: 3px;
        }
        
        .pirate-brand-quote {
          color: rgba(168, 218, 220, 0.9);
          font-size: 1.3rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .pirate-copyright {
          color: rgba(168, 218, 220, 0.7);
          font-size: 1rem;
        }
      `}</style>
    </footer>
  );
};

export default PirateFooter;