import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authtication/AuthContext';
import MySingleTip from './MySingleTip';
import Loading from '../Loading/Loading';

const MyTips = () => {
  const { user } = useContext(AuthContext);
  const [myTips, setMyTips] = useState([]);
 

  useEffect(() => {
    if (user?.email) {
      fetch(`https://garden-hub-server-nqgqlnv42-skrased2006s-projects.vercel.app/tips/user/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setMyTips(data);
        })
        .catch(err => console.error('Error fetching tips:', err));
    }
  }, [user?.email]);

  
  const handleDeleteTip = (deletedId) => {
    const updatedTips = myTips.filter(tip => tip._id !== deletedId);
    setMyTips(updatedTips);
  };

  
  return (
    <div className="p-6 max-w-10/12 mx-auto">
      <h2 className="text-2xl text-center mb-4 text-green-500 font-bold">My Garden Tips</h2>
      {myTips.length === 0 ? (
        <p className="text-gray-500 text-center font-bold">No tips found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {myTips.map(mySingleTip => (
            <MySingleTip
              key={mySingleTip._id}
              mySingleTip={mySingleTip}
              onDelete={handleDeleteTip} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTips;

