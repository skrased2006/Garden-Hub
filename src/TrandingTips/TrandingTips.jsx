import React, { useEffect, useState } from 'react';
import SingleTradingTip from './SingleTradingTip';

const TrandingTips = () => {

    const [trandingTips, setTrandingTips] =useState([]);

    useEffect(()=>{
        fetch('https://garden-hub-server-teal.vercel.app/trandingTips')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setTrandingTips(data);
        })
    },[])


    return (
        <div>
             <h2 className="text-3xl font-bold text-center mb-8 text-green-700 ">🌿 Trending Tips </h2>
            

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 mx-auto max-w-11/12'>
                {trandingTips.map(trandingSingleTip=><SingleTradingTip 
                key={trandingSingleTip.id}
                
                trandingSingleTip={trandingSingleTip}></SingleTradingTip>)}

            </div>
        </div>
    );
};

export default TrandingTips;