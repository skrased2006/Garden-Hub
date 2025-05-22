import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

const ExploreGardeners = () => {
  const [gardeners, setGardeners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://garden-hub-server-skrased2006-skrased2006s-projects.vercel.app/users')
      .then(res => res.json())
      .then(data => {
        setGardeners(data);
      })
      .catch(err => {
        console.error('Error fetching gardeners:', err);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []);
  

  if(loading){
    return<Loading></Loading>;
  }

  return (
    <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {gardeners.map((gardener) => (
        <div
          key={gardener._id}
          className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center
                     hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
        >
          <img
            src={gardener.img || 'https://via.placeholder.com/150'}
            alt={gardener.name}
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-400"
          />
          <h2 className="text-2xl font-bold mb-2 text-green-700">{gardener.name}</h2>
          <p className="text-gray-700 mb-1">
            Age: <span className="font-semibold">{gardener.age}</span>
          </p>
          <p className="text-gray-700 mb-1">
            Gender: <span className="font-semibold">{gardener.gender}</span>
          </p>
          <p className="text-gray-700 mb-1 capitalize">
            Status: <span className="font-semibold">{gardener.status}</span>
          </p>
          <p className="text-gray-700 mb-2">
            Experience: <span className="font-semibold">{gardener.experiences} years</span>
          </p>
          <p className="text-gray-900 font-semibold text-lg">
            Total Shared Tips: {gardener.totalSharedTips || 0}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExploreGardeners;
