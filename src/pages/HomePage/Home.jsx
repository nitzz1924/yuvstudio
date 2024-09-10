import React from 'react'
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import VideoSection from './VideoSection';
import BusinessSection from './BusinessSection';
import WorkSection from './WorkSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <VideoSection/>
      <BusinessSection/>
      <WorkSection/>
    </div>
  )
}

export default Home;