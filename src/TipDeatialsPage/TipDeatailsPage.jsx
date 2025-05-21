import { ArrowBigLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router'; // ✅ 'react-router-dom' use করো
import Loading from '../Loading/Loading';

const TipDeatailsPage = () => {
  const tipData = useLoaderData(); // All tips from loader
  const { id } = useParams();     
  const [loading,setLoading] =useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 সেকেন্ড লোডিং দেখাবে

    return () => clearTimeout(timer);
  }, []);
  // Get the id from URL

  const singleTipData = tipData.find(data => data._id === id);

  if (!singleTipData) {
    return <p className="text-center text-red-500">Tip not found</p>;
  }

  const {
    title,
    topic,
    difficulty,
    description,
    image,
    category,
    availability,
    name,
    email
  } = singleTipData;

  if(loading){
    return <Loading></Loading>
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-10  space-y-4 ">
      <img src={image} alt={title} className="w-full h-100 object-cover rounded-md mb-4 "  />
      <h1 className="text-3xl font-bold text-green-700 mb-5">{title}</h1>
      <p><strong>Topic:</strong> {topic}</p>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Difficulty:</strong> {difficulty}</p>
      <p><strong>Availability:</strong> {availability}</p>
      <p className="mt-4 text-gray-700"><strong>Description:</strong> {description}</p>
      <div className="mt-6 text-sm text-gray-500 italic">
        <p>Submitted by: {name || 'Anonymous'}</p>
        <p>{email}</p>

       <Link to="/browseTips" className="text-green-700 hover:text-green-900">
       <button className='bg-blue-400 py-2 px-6 mt-8 text-white flex gap-2 items-center cursor-pointer'>
            <ArrowBigLeft />Back</button>
       
       </Link> 
      </div>
    </div>
  );
};

export default TipDeatailsPage;
