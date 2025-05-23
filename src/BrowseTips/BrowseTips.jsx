import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router'; 
import TipCard from '../ExploreGardeners/TipCard';
import Loading from '../Loading/Loading';
import { Fade } from 'react-awesome-reveal';

const BrowseTips = () => {
  const gardenData = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredTips = selectedDifficulty
    ? [...gardenData].sort((a, b) => {
        if (a.difficulty === selectedDifficulty && b.difficulty !== selectedDifficulty) return -1;
        if (a.difficulty !== selectedDifficulty && b.difficulty === selectedDifficulty) return 1;
        return 0;
      })
    : gardenData;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Fade direction="down" triggerOnce>
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          Explore Garden Tips from Gardeners
        </h2>
      </Fade>

      <Fade direction="up" delay={100} triggerOnce>
        <div className="mb-6 flex justify-center">
          <select
            className="border border-gray-300 rounded-md px-4 bg-white text-gray-700 shadow-sm
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
              transition duration-200 ease-in-out cursor-pointer"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </Fade>

      <Fade cascade damping={0.1} triggerOnce>
        {filteredTips?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTips.map((singleData) => (
              <TipCard key={singleData._id} singleData={singleData} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No gardening tips found.</p>
        )}
      </Fade>
    </div>
  );
};

export default BrowseTips;
