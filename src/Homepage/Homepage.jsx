import React from 'react';
import BannerSlider from '../Slider/BannerSlider';
import ActiveGardeners from '../Active Gardeners/ActiveGardeners';
import TrandingTips from '../TrandingTips/TrandingTips';
import GardenBenefitsDetailed from '../GardenBenifit/GardenBenefitsDetailed';
import GardenIdeas from '../GardenGuides/GardenIdeas ';


import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const Homepage = () => {
    return (
        <div>
            <Zoom triggerOnce>
                <BannerSlider />
            </Zoom>

            <Slide direction="left" triggerOnce>
                <ActiveGardeners />
            </Slide>

            <Fade direction="up" triggerOnce>
                <TrandingTips />
            </Fade>

            <Slide direction="right" triggerOnce>
                <GardenBenefitsDetailed />
            </Slide>

            <Fade direction="up" triggerOnce>
                <GardenIdeas />
            </Fade>
        </div>
    );
};

export default Homepage;



