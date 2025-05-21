import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router'; // ✅ make sure it's from react-router-dom
import TipCard from '../ExploreGardeners/TipCard';
import Loading from '../Loading/Loading';

const BrowseTips = () => {
  const gardenData = useLoaderData();
  const [loading, setLoading] = useState(true);

  // Add loading delay effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1.5 seconds delay

    return () => clearTimeout(timer); // Clean up
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
        Explore Garden Tips from Gardeners
      </h2>

      {gardenData?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gardenData.map((singleData) => (
            <TipCard key={singleData._id} singleData={singleData} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No gardening tips found.</p>
      )}
    </div>
  );
};

export default BrowseTips;
