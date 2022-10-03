import dynamic from 'next/dynamic';
import React from 'react';
import HeroSection from '../components/CaseStudy/HeroSection';


const CaseStudyTabs = dynamic(() => import("../components/CaseStudy/CaseStudyTabs"), {ssr: false});

const CaseStudy = () => {
    return (
        <>
            <HeroSection/>
            <CaseStudyTabs/>
        </>
    );
};

export default CaseStudy;