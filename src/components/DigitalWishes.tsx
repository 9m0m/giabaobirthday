import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Zap } from 'lucide-react';
import { BIRTHDAY_MESSAGES } from '../utils/constants';
import { fadeInUp, hologramFloat } from '../utils/animations';

export const DigitalWishes: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const wishCards = BIRTHDAY_MESSAGES.map((message, index) => ({
    id: index,
    message,
    icon: [Heart, Star, Zap][index % 3],
    color: ['text-pink-400', 'text-yellow-400', 'text-lime-400'][index % 3],
    gradient: ['from-pink-500', 'from-yellow-500', 'from-lime-500'][index % 3]
  }));

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-purple-950/20 to-black">
      {/* Digital Rain Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-cyan-400 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 200 + 100}px`,
            }}
            animate={{
              y: ['-100vh', '100vh'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          DIGITAL WISHES
        </motion.h2>

        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-block border border-pink-400 px-6 py-2 rounded-full text-pink-400 font-mono">
            TRANSMITTING GOOD VIBES...
          </div>
        </motion.div>

        {/* Floating Wish Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative perspective-1000"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              animate={hologramFloat}
              onHoverStart={() => setActiveCard(card.id)}
              onHoverEnd={() => setActiveCard(null)}
            >
              <motion.div
                className={`
                  relative p-6 rounded-lg border-2 transition-all duration-500 cursor-pointer
                  ${activeCard === card.id 
                    ? `border-${card.color.split('-')[1]}-400 shadow-lg shadow-${card.color.split('-')[1]}-400/30` 
                    : 'border-gray-700 hover:border-gray-500'
                  }
                `}
                style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.9))',
                  backdropFilter: 'blur(10px)'
                }}
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.05,
                  z: 50
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Static Overlay Effect */}
                {activeCard === card.id && (
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: `linear-gradient(45deg, transparent 48%, ${card.color.includes('pink') ? '#FF1493' : card.color.includes('yellow') ? '#FFD700' : '#39FF14'}20 50%, transparent 52%)`
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                )}

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <card.icon className={`w-8 h-8 ${card.color} mr-3`} />
                    <div className={`text-xs font-mono uppercase tracking-wide ${card.color}`}>
                      Wish #{String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <p className="text-white text-lg leading-relaxed font-light">
                    {card.message}
                  </p>

                  {/* Holographic Corner Accents */}
                  <div className={`absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 ${card.color.replace('text-', 'border-')} opacity-60`}></div>
                  <div className={`absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 ${card.color.replace('text-', 'border-')} opacity-60`}></div>
                </div>

                {/* Digital Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
                  animate={activeCard === card.id ? {
                    opacity: [0, 0.3, 0],
                    background: [
                      'linear-gradient(90deg, transparent, transparent)',
                      `linear-gradient(90deg, transparent, ${card.color.includes('pink') ? '#FF1493' : card.color.includes('yellow') ? '#FFD700' : '#39FF14'}30, transparent)`,
                      'linear-gradient(90deg, transparent, transparent)'
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50]
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};