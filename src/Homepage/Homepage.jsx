import React from 'react';
import BannerSlider from '../Slider/BannerSlider';
import ActiveGardeners from '../Active Gardeners/ActiveGardeners';
import TrandingTips from '../TrandingTips/TrandingTips';



const Homepage = () => {
    return (
        <div>
           
            <BannerSlider></BannerSlider>
            <ActiveGardeners></ActiveGardeners>

            <TrandingTips></TrandingTips>
           
            
            
        </div>
    );
};

export default Homepage;


