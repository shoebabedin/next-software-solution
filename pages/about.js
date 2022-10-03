import React from 'react';
import Client from '../components/About/Client';
import Gellary from '../components/About/Gellary';
import HeroSection from '../components/About/HeroSection';
import Subscribe from '../components/About/Subscribe';
import Timeline from '../components/About/Timeline';

const About = () => {
    return (
        <>
            <HeroSection/>
            <Gellary/>
            <Timeline/>
            <Client/>
            <Subscribe/>
        </>
    );
};

export default About;