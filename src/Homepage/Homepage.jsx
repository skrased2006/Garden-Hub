import React from 'react';
import BannerSlider from '../Slider/BannerSlider';
import ActiveGardeners from '../Active Gardeners/ActiveGardeners';
import TrandingTips from '../TrandingTips/TrandingTips';
import GardenBenefitsDetailed from '../GardenBenifit/GardenBenefitsDetailed';
import GardenIdeas from '../GardenGuides/GardenIdeas ';



const Homepage = () => {
    return (
        <div>
           
            <BannerSlider></BannerSlider>
            <ActiveGardeners></ActiveGardeners>

            <TrandingTips></TrandingTips>
            <GardenBenefitsDetailed></GardenBenefitsDetailed>

            <GardenIdeas></GardenIdeas>
           
            
            
        </div>
    );
};

export default Homepage;


