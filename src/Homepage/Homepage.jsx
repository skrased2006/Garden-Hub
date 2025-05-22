import React from 'react';
import BannerSlider from '../Slider/BannerSlider';
import ActiveGardeners from '../Active Gardeners/ActiveGardeners';
import TrandingTips from '../TrandingTips/TrandingTips';
import GardenBenefitsDetailed from '../GardenBenifit/GardenBenefitsDetailed';



const Homepage = () => {
    return (
        <div>
           
            <BannerSlider></BannerSlider>
            <ActiveGardeners></ActiveGardeners>

            <TrandingTips></TrandingTips>
            <GardenBenefitsDetailed></GardenBenefitsDetailed>
           
            
            
        </div>
    );
};

export default Homepage;


