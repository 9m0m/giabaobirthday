import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Target, Crown, Gamepad2 } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  progress: number;
  color: string;
  unlocked: boolean;
}

export const AchievementSection: React.FC = () => {
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  
  const achievements: Achievement[] = [
    {
      id: 'age-19',
      title: 'Level 19 Reached',
      description: 'Successfully completed another year of existence',
      icon: Trophy,
      progress: 100,
      color: 'from-gold-400 to-yellow-500',
      unlocked: true
    },
    {
      id: 'birthday-master',
      title: 'Birthday Master',
      description: 'Celebrated 19 amazing birthdays',
      icon: Crown,
      progress: 100,
      color: 'from-purple-400 to-pink-500',
      unlocked: true
    },
    {
      id: 'new-year',
      title: 'New Year Unlocked',
      description: 'Gained access to 2025 content',
      icon: Star,
      progress: 100,
      color: 'from-cyan-400 to-blue-500',
      unlocked: true
    },
    {
      id: 'wisdom-gained',
      title: 'Wisdom +1',
      description: 'Intelligence and experience increased',
      icon: Zap,
      progress: 95,
      color: 'from-lime-400 to-green-500',
      unlocked: true
    },
    {
      id: 'future-ready',
      title: 'Future Ready',
      description: 'Prepared for upcoming adventures',
      icon: Target,
      progress: 85,
      color: 'from-pink-400 to-red-500',
      unlocked: false
    },
    {
      id: 'legend-status',
      title: 'Legend Status',
      description: 'Achieved legendary status at 19',
      icon: Gamepad2,
      progress: 90,
      color: 'from-indigo-400 to-purple-600',
      unlocked: false
    }
  ];

  useEffect(() => {
    // Simulate achievements unlocking with delay
    const timer = setTimeout(() => {
      setUnlockedAchievements(achievements.filter(a => a.unlocked).map(a => a.id));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Gaming Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          ACHIEVEMENTS UNLOCKED
        </motion.h2>

        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-block border border-yellow-400 px-6 py-2 rounded-full text-yellow-400 font-mono">
            BIRTHDAY MILESTONES COMPLETED
          </div>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className={`
                relative p-6 rounded-lg border-2 transition-all duration-500
                ${achievement.unlocked 
                  ? 'border-yellow-400 bg-gradient-to-br from-yellow-400/10 to-transparent' 
                  : 'border-gray-700 bg-gradient-to-br from-gray-800/50 to-black/50'
                }
              `}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: achievement.unlocked ? "0 20px 40px rgba(255, 215, 0, 0.3)" : "0 10px 20px rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Achievement Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`
                  p-3 rounded-full bg-gradient-to-r ${achievement.color} 
                  ${achievement.unlocked ? 'animate-pulse' : 'grayscale opacity-50'}
                `}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                
                {achievement.unlocked && (
                  <motion.div
                    className="text-yellow-400 text-sm font-mono"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    ✓ UNLOCKED
                  </motion.div>
                )}
              </div>

              {/* Achievement Info */}
              <h3 className={`
                text-xl font-bold mb-2 
                ${achievement.unlocked ? 'text-white' : 'text-gray-500'}
              `}>
                {achievement.title}
              </h3>
              
              <p className={`
                text-sm mb-4 leading-relaxed
                ${achievement.unlocked ? 'text-gray-300' : 'text-gray-600'}
              `}>
                {achievement.description}
              </p>

              {/* Progress Bar */}
              <div className="relative">
                <div className="flex justify-between text-xs mb-1">
                  <span className={achievement.unlocked ? 'text-cyan-400' : 'text-gray-600'}>
                    Progress
                  </span>
                  <span className={achievement.unlocked ? 'text-cyan-400' : 'text-gray-600'}>
                    {achievement.progress}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${achievement.color} relative`}
                    initial={{ width: 0 }}
                    animate={{ width: `${achievement.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                  >
                    {achievement.unlocked && (
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Holographic Effect for Unlocked Achievements */}
              {achievement.unlocked && (
                <>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent transform rotate-12"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                  
                  {/* Corner Glow Effects */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-yellow-400 animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-yellow-400 animate-pulse"></div>
                </>
              )}

              {/* Lock Overlay for Locked Achievements */}
              {!achievement.unlocked && (
                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                  <div className="text-gray-500 text-4xl">🔒</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Achievement Summary */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-purple-400 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-black mb-2">ACHIEVEMENT SCORE</h3>
            <div className="text-4xl font-bold text-black">
              {achievements.filter(a => a.unlocked).length}/{achievements.length}
            </div>
            <div className="text-black/80 font-mono text-sm mt-2">
              MILESTONES COMPLETED
            </div>
          </div>
        </motion.div>

        {/* Floating Achievement Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {unlockedAchievements.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -50]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5 + 2
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};