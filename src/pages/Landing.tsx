import React from 'react';
import {
  HeroSection,
  StatsSection,
  FeaturesSection,
  SponsorsSection,
  CelebrityJudgesSection,
  JudgeRecruitmentSection,
  FAQSection,
  CTASection,
  Footer
} from '../components/landing';

function Landing() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <SponsorsSection />
      <CelebrityJudgesSection />
      <JudgeRecruitmentSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default Landing;