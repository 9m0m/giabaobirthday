import React from 'react';
import { ParticleField } from './components/ParticleField';
import { HeroSection } from './components/HeroSection';
import { IdentityMatrix } from './components/IdentityMatrix';
import { DigitalWishes } from './components/DigitalWishes';
import { CelebrationZone } from './components/CelebrationZone';
import { AchievementSection } from './components/AchievementSection';
import { FinalCelebration } from './components/FinalCelebration';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Background Particle Field */}
      <ParticleField particleCount={60} />
      
      {/* Main Content Sections */}
      <HeroSection />
      <IdentityMatrix />
      <DigitalWishes />
      <CelebrationZone />
      <AchievementSection />
      <FinalCelebration />
    </div>
  );
}

export default App;