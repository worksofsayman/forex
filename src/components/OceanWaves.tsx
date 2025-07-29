import { motion } from 'framer-motion';

const OceanWaves = () => {
  return (
    <div className="ocean">
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      <div className="wave wave-3"></div>
      <div className="bubbles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="bubble"
            animate={{
              y: [0, -20, 0],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OceanWaves;