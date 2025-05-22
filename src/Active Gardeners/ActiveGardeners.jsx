import React, { useEffect, useState } from 'react';

const ActiveGardeners = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch('https://garden-hub-server-teal.vercel.app/active-users')
      .then(res => res.json())
      .then(data => {
       setGardeners(data);
        
      });
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">🌿 Featured Gardeners</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-11/12 mx-auto">
        {gardeners.map((gardener, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg p-5 hover:shadow-xl transition">
            <img
              src={gardener.img}
              alt={gardener.name}
              className="h-24 w-24 rounded-full mx-auto object-cover border-2 border-green-400"
            />
            <h3 className="text-xl font-semibold text-center mt-4">{gardener.name}</h3>
            <p className="text-center text-gray-500">{gardener.email}</p>
            <p className="text-center mt-2 font-medium text-green-600">{gardener.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveGardeners;
