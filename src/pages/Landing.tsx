import React from 'react';
import {
  HeroSection,
  StatsSection,
  FeaturesSection,
  JudgeRecruitmentSection,
  FAQSection,
  CTASection,
  Footer,
  PrizesSection
} from '../components/landing';

import { SponsorsGridSection } from '@/components/landing/SponsorsGridSection';
import { CelebrityJudgesSection } from '@/components/landing/CelebrityJudgesSection';


function Landing() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <SponsorsGridSection />
      <PrizesSection />
      <CelebrityJudgesSection />
      <JudgeRecruitmentSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default Landing;