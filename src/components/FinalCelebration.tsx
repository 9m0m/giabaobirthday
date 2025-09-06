import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUp } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export const FinalCelebration: React.FC = () => {
  const [fireworksActive, setFireworksActive] = useState(false);

  const triggerGrandFinale = () => {
    setFireworksActive(true);
    setTimeout(() => setFireworksActive(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-purple-950 to-black overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Waves */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-32 opacity-10"
            style={{
              background: `linear-gradient(90deg, transparent, ${['#00FFFF', '#FF1493', '#9D00FF', '#39FF14', '#FFD700'][i]}, transparent)`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              x: ['-100%', '100%'],
              scaleY: [1, 1.5, 1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2 
          className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            backgroundPosition: { duration: 3, repeat: Infinity }
          }}
        >
          WELCOME TO LEVEL 19
        </motion.h2>

        <motion.h3
          className="text-4xl md:text-5xl font-bold mb-12 text-white"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            textShadow: '0 0 30px #00FFFF, 0 0 60px #FF1493'
          }}
        >
          BẢO!
        </motion.h3>

        {/* Grand Finale Button */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="group relative px-12 py-6 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 rounded-full text-white font-bold text-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerGrandFinale}
            animate={{
              boxShadow: [
                '0 0 20px rgba(0,255,255,0.5)',
                '0 0 40px rgba(255,20,147,0.8)',
                '0 0 20px rgba(0,255,255,0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              GRAND FINALE
              <Sparkles className="w-8 h-8" />
            </span>
            
            {/* Rainbow Wave Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
          </motion.button>
        </motion.div>

        {/* Birthday Message */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-xl md:text-2xl text-cyan-300 leading-relaxed font-light">
            Another year of adventures completed, another level unlocked. 
            The cyberpunk future is yours to explore, and the neon lights 
            guide your path to even greater achievements ahead.
          </p>
          <p className="text-lg text-pink-300 mt-6 font-mono">
            Happy 19th Birthday, Bảo! 🎉✨🚀
          </p>
        </motion.div>

        {/* Credits Roll */}
        <motion.div
          className="font-mono text-sm text-gray-400 mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <div className="mb-2">CYBERPUNK BIRTHDAY EXPERIENCE v2.0</div>
          <div className="mb-2">DESIGNED FOR HỒ GIA BẢO</div>
          <div className="mb-2">SEPTEMBER 6TH, 2025</div>
          <div>POWERED BY NEON DREAMS & DIGITAL MAGIC</div>
        </motion.div>

        {/* Return to Top */}
        <motion.button
          onClick={scrollToTop}
          className="group flex items-center gap-2 mx-auto px-6 py-3 border border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          whileHover={{ y: -5 }}
        >
          <ArrowUp className="w-5 h-5" />
          RESTART CELEBRATION
        </motion.button>
      </div>

      {/* Grand Finale Fireworks */}
      {fireworksActive && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Multiple Firework Explosions */}
          {[...Array(8)].map((_, explosionIndex) => (
            <div
              key={explosionIndex}
              className="absolute"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 60 + 20}%`,
              }}
            >
              {/* Firework Burst */}
              {[...Array(16)].map((_, sparkIndex) => (
                <motion.div
                  key={sparkIndex}
                  className="absolute w-1 h-8 rounded-full"
                  style={{
                    background: `linear-gradient(to bottom, 
                      ${['#FF1493', '#00FFFF', '#9D00FF', '#39FF14', '#FFD700'][sparkIndex % 5]}, 
                      transparent)`,
                    transformOrigin: 'bottom center',
                    transform: `rotate(${sparkIndex * 22.5}deg)`
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 1, 0.5],
                    opacity: [1, 1, 0],
                    y: [0, -100]
                  }}
                  transition={{
                    duration: 2,
                    delay: explosionIndex * 0.3 + sparkIndex * 0.02,
                    ease: "easeOut"
                  }}
                />
              ))}
              
              {/* Central Flash */}
              <motion.div
                className="absolute w-8 h-8 rounded-full bg-white"
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: [0, 3, 0],
                  opacity: [1, 0.8, 0]
                }}
                transition={{
                  duration: 0.5,
                  delay: explosionIndex * 0.3
                }}
              />
            </div>
          ))}

          {/* Falling Sparkles */}
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                background: ['#FF1493', '#00FFFF', '#9D00FF', '#39FF14', '#FFD700'][i % 5],
                boxShadow: `0 0 6px ${['#FF1493', '#00FFFF', '#9D00FF', '#39FF14', '#FFD700'][i % 5]}`
              }}
              animate={{
                y: [0, window.innerHeight + 50],
                x: [0, Math.random() * 200 - 100],
                opacity: [1, 0.5, 0],
                scale: [1, 0.5]
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};