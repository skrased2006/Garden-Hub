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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-lg shadow-lg my-10 space-y-5 ">
      <img
        src={image}
        alt={title}
        className="w-full max-h-[400px] object-cover rounded-md mb-4"
      />

      <h1 className="text-2xl sm:text-3xl font-bold text-green-700">{title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
        <p><strong>Topic:</strong> {topic}</p>
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Difficulty:</strong> {difficulty}</p>
        <p><strong>Availability:</strong> {availability}</p>
      </div>

      <div className="mt-4 text-gray-700">
        <p><strong>Description:</strong></p>
        <p className="mt-1">{description}</p>
      </div>

      <div className="mt-6 text-sm text-gray-500 italic space-y-1">
        <p>Submitted by: {name || 'Anonymous'}</p>
        <p>{email}</p>
      </div>

      <div className="mt-8">
        <Link to="/browseTips">
          <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white py-2 px-5 rounded flex items-center gap-2">
            <ArrowBigLeft size={20} /> Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TipDeatailsPage;
