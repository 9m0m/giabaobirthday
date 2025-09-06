import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cake, Zap } from 'lucide-react';
import { BIRTHDAY_DATA } from '../utils/constants';
import { fadeInUp, glitchEffect, neonGlow } from '../utils/animations';

export const HeroSection: React.FC = () => {
  const [isExploded, setIsExploded] = useState(false);

  const handleCakeClick = () => {
    setIsExploded(true);
    setTimeout(() => setIsExploded(false), 3000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Digital Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-pattern w-full h-full" 
             style={{
               backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px',
               animation: 'grid-move 20s linear infinite'
             }}>
        </div>
      </div>

      {/* Holographic Scan Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-lines h-full w-full opacity-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Floating 19 */}
        <motion.div 
          className="relative mb-8"
          animate={{ 
            rotateY: [0, 360],
            y: [-10, 10, -10]
          }}
          transition={{
            rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent neon-text-glow">
            19
          </div>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-cyan-400 opacity-20 blur-sm animate-pulse">
            19
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 text-white neon-text-glow"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          style={{
            textShadow: '0 0 20px #00FFFF, 0 0 40px #00FFFF',
            animation: 'chromatic-aberration 3s ease-in-out infinite alternate'
          }}
        >
          HAPPY BIRTHDAY
        </motion.h1>

        <motion.h2 
          className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent"
          variants={glitchEffect}
          initial="initial"
          animate="animate"
        >
          HỒ GIA BẢO
        </motion.h2>

        {/* Subtitle */}
        <motion.div 
          className="text-xl md:text-2xl text-cyan-300 mb-12 font-mono"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="text-lime-400" />
            Level {BIRTHDAY_DATA.age} Unlocked
            <Zap className="text-lime-400" />
          </div>
          <div className="text-lg opacity-80">
            {BIRTHDAY_DATA.birthday}
          </div>
        </motion.div>

        {/* Interactive Birthday Cake */}
        <motion.div 
          className="relative inline-block cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCakeClick}
        >
          <motion.div
            animate={neonGlow}
            className="text-6xl p-4 rounded-full border-2 border-cyan-400 text-cyan-400 hover:border-pink-400 hover:text-pink-400 transition-colors"
          >
            <Cake />
          </motion.div>
          
          {/* Fireworks Animation */}
          {isExploded && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                  style={{
                    background: `hsl(${i * 30}, 100%, 50%)`,
                    boxShadow: `0 0 10px hsl(${i * 30}, 100%, 50%)`
                  }}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    x: Math.cos(i * 30 * Math.PI / 180) * 100,
                    y: Math.sin(i * 30 * Math.PI / 180) * 100,
                  }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-sm font-mono mb-2">ENTER THE MATRIX</div>
          <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
};