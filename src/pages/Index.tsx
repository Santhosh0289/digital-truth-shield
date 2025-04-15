
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Applications from '@/components/home/Applications';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <Applications />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
