import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, PartyPopper, Sparkles, Music } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export const CelebrationZone: React.FC = () => {
  const [openGifts, setOpenGifts] = useState<number[]>([]);
  const [confettiActive, setConfettiActive] = useState(false);

  const gifts = [
    { id: 1, color: 'from-pink-500 to-purple-600', surprise: '🎮', message: 'New Adventures Await!' },
    { id: 2, color: 'from-cyan-500 to-blue-600', surprise: '🚀', message: 'Reach for the Stars!' },
    { id: 3, color: 'from-lime-500 to-green-600', surprise: '💎', message: 'You\'re a Gem!' },
    { id: 4, color: 'from-yellow-500 to-orange-600', surprise: '⚡', message: 'Electrifying Year Ahead!' }
  ];

  const handleGiftClick = (giftId: number) => {
    if (!openGifts.includes(giftId)) {
      setOpenGifts([...openGifts, giftId]);
    }
  };

  const triggerConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 3000);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-indigo-950/30 to-black overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full opacity-5">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3],
                rotate: [0, 360]
              }}
              transition={{
                duration: Math.random() * 8 + 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-lime-400 to-pink-400 bg-clip-text text-transparent"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          CYBER CELEBRATION
        </motion.h2>

        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-block border border-lime-400 px-6 py-2 rounded-full text-lime-400 font-mono">
            PARTY PROTOCOL ACTIVATED
          </div>
        </motion.div>

        {/* Virtual Gifts Section */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-cyan-400 font-mono">
            DIGITAL GIFTS AWAITING...
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gifts.map((gift, index) => (
              <motion.div
                key={gift.id}
                className="relative cursor-pointer"
                whileHover={{ scale: 1.1, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleGiftClick(gift.id)}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {!openGifts.includes(gift.id) ? (
                  // Closed Gift
                  <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${gift.color} rounded-lg flex items-center justify-center relative`}>
                    <Gift className="w-8 h-8 text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-lg animate-pulse"></div>
                    
                    {/* Gift Ribbon */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/50"></div>
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-1 bg-white/50"></div>
                  </div>
                ) : (
                  // Opened Gift
                  <motion.div 
                    className="text-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <div className="text-4xl mb-2">{gift.surprise}</div>
                    <div className="text-xs text-cyan-300 font-mono">{gift.message}</div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Digital Balloons */}
        <motion.div
          className="relative mb-16 h-40"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0"
              style={{ left: `${10 + i * 10}%` }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            >
              <div 
                className={`w-12 h-16 rounded-full opacity-80`}
                style={{
                  background: `linear-gradient(45deg, 
                    ${['#FF1493', '#00FFFF', '#9D00FF', '#39FF14', '#FFD700'][i % 5]}, 
                    ${['#FF69B4', '#87CEEB', '#DA70D6', '#90EE90', '#FFA500'][i % 5]})`
                }}
              >
                {/* Balloon String */}
                <div className="w-px h-16 bg-gray-400 mx-auto"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Confetti Trigger */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold text-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerConfetti}
          >
            <span className="relative z-10 flex items-center gap-3">
              <PartyPopper className="w-6 h-6" />
              CELEBRATE!
              <Sparkles className="w-6 h-6" />
            </span>
            
            {/* Button Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-50"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>

        {/* Confetti Animation */}
        {confettiActive && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-10px',
                  background: ['#FF1493', '#00FFFF', '#9D00FF', '#39FF14', '#FFD700'][i % 5],
                  borderRadius: Math.random() > 0.5 ? '50%' : '0%'
                }}
                animate={{
                  y: [0, window.innerHeight + 100],
                  x: [0, Math.random() * 200 - 100],
                  rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                  scale: [1, 0.5, 1]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  ease: "easeOut",
                  delay: Math.random() * 0.5
                }}
              />
            ))}
          </div>
        )}

        {/* Sound Visualization */}
        <motion.div 
          className="flex justify-center items-center gap-1 mt-12 opacity-50"
          animate={confettiActive ? { opacity: [0.5, 1, 0.5] } : {}}
          transition={{ duration: 0.5, repeat: confettiActive ? Infinity : 0 }}
        >
          <Music className="w-5 h-5 text-cyan-400 mr-2" />
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-gradient-to-t from-cyan-400 to-pink-400 rounded-full"
              animate={confettiActive ? {
                height: [8, Math.random() * 30 + 10, 8]
              } : { height: 8 }}
              transition={{
                duration: 0.3,
                repeat: confettiActive ? Infinity : 0,
                delay: i * 0.05
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};