import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, Trophy, Target } from 'lucide-react';
import { BIRTHDAY_DATA } from '../utils/constants';
import { fadeInUp } from '../utils/animations';

export const IdentityMatrix: React.FC = () => {
  const stats = [
    { label: "Years Lived", value: BIRTHDAY_DATA.age, icon: Trophy, color: "text-cyan-400" },
    { label: "Days on Earth", value: BIRTHDAY_DATA.daysLived.toLocaleString(), icon: Calendar, color: "text-pink-400" },
    { label: "Birth Year", value: BIRTHDAY_DATA.birthYear, icon: User, color: "text-purple-400" },
    { label: "Next Milestone", value: "Level 20", icon: Target, color: "text-lime-400" }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="circuit-pattern w-full h-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          IDENTITY MATRIX
        </motion.h2>

        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-block border border-cyan-400 px-6 py-2 rounded-full text-cyan-400 font-mono">
            SYSTEM SCAN COMPLETE
          </div>
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div 
          className="relative mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="text-2xl font-mono text-purple-400 mr-4">2006</div>
            <div className="flex-1 relative h-2 bg-gray-800 rounded-full max-w-md mx-4">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-2xl font-mono text-cyan-400 ml-4">2025</div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-black border border-gray-700 p-6 rounded-lg hover:border-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/20">
                <div className="flex items-center mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color} mr-3`} />
                  <h3 className="text-white font-mono text-sm uppercase tracking-wide">
                    {stat.label}
                  </h3>
                </div>
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Holographic Portrait Frame */}
        <motion.div 
          className="mt-16 flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="relative">
            <div className="w-64 h-64 border-2 border-cyan-400 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
              {/* Scan Lines Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-full animate-pulse"></div>
              
              {/* Portrait Placeholder */}
              <div className="text-6xl text-cyan-400">
                <User />
              </div>
              
              {/* Corner Brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
            </div>
            
            {/* Holographic Glow */}
            <div className="absolute -inset-2 bg-cyan-400/20 rounded-lg blur-xl animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};