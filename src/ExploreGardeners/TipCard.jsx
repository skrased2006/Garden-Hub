import { Edit, Eye, Trash2 } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const TipCard = ({ singleData }) => {
  const {
    title,
    topic,
    difficulty,
    description,
    image,
    category,
    availability,
    name,
    email,
    _id
  } = singleData;

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
      {/* <p className="text-sm text-gray-600"><strong>Difficulty:</strong> {difficulty}</p> */}
      {/* <p className="text-sm text-gray-600"><strong>Availability:</strong> {availability}</p> */}
      <p className="text-gray-700"><strong>Description:</strong>:{description.slice(0, 50)}<Link to={`/tipDeatialsPage/${_id}`}><span className='font-bold text-blue-500'>  See more...</span></Link></p>
      {/* <div className="text-xs text-gray-500 italic">
        <p>Submitted by: {name || "Anonymous"}</p>
        <p>{email}</p>
        
      </div> */}
     
    </div>
  );
};

export default TipCard;
