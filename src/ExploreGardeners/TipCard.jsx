import {  ThumbsUp } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router'; // ✅ ঠিক router-dom ব্যবহার করতে হবে

const TipCard = ({ singleData }) => {
  const [likes, setLikes] = useState(singleData.likes || 0); // initial likes
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);


  const {
    title,
    topic,
    description,
    image,
    category,
    _id
  } = singleData;

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      setAnimate(true);
    setTimeout(()=>setAnimate(false),600)


      // (optional) Update like to backend
      fetch(`http://localhost:3000/tips/like/${_id}`, {
        method: 'PATCH'
      }).catch(err => console.error('Like update failed', err));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-2 hover:shadow-lg transition">
      <img
        src={image || 'https://via.placeholder.com/300x200'}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold text-green-700">{title}</h3>
      <p className="text-sm text-gray-600"><strong>Topic:</strong> {topic}</p>
      <p className="text-sm text-gray-600"><strong>Category:</strong> {category}</p>

      <p className="text-gray-700">
        <strong>Description:</strong>: {description.slice(0, 50)}
        <Link to={`/tipDeatialsPage/${_id}`}>
          <span className='font-bold text-blue-500'>  See more...</span>
        </Link>
      </p>

      {/* ❤️ Like Button */}
     <div onClick={handleLike} className="flex items-center gap-2 mt-2 cursor-pointer select-none">
       {liked ? (
         <img src="https://i.postimg.cc/zX1dzwTk/Chat-GPT-Image-May-21-2025-07-22-35-PM.png" 
         
         alt="Liked"    className={`w-10 h-10 object-cover ${animate ? 'like-bounce' : ''}`}
         />
       ) : (
         <ThumbsUp className="w-5 h-5 text-gray-400" />
       )}
       <span className="text-sm">{likes} Likes</span>
     </div>
    </div>
  );
};

export default TipCard;
