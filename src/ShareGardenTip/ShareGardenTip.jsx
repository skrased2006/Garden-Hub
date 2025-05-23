import React, { useContext, useState } from 'react';
import { AuthContext } from '../Authtication/AuthContext';
import {  Zoom } from 'react-awesome-reveal';
import Swal from 'sweetalert2';

const ShareGardenTip = () => {
  const { user } = useContext(AuthContext);
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    topic: '',
    difficulty: 'Easy',
    description: '',
    image: '',
    category: 'Plant Care',
    availability: 'Public',
    name: user?.displayName || user?.name || '',
    email: user?.email || ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTip = e => {
    e.preventDefault();
    fetch('https://garden-hub-server-teal.vercel.app/tips', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId || data.acknowledged) {
          setSuccess('✅ Tip submitted successfully!');
          setFormData({
            title: '',
            topic: '',
            difficulty: 'Easy',
            description: '',
            image: '',
            category: 'Plant Care',
            availability: 'Public',
            name: user?.displayName || user?.name || '',
            email: user?.email || ''
          });
        }
      })
      .catch(err => {
        console.error('Submission error:', err);
        setSuccess('❌ Submission failed!');
      });
  };

  return (
    <Zoom triggerOnce>
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4">Submit a Gardening Tip</h2>
      {success && 
      Swal.fire({
     position: "top-end",
      icon: "success",
     title: "Your tip has been submitted successfully",
      showConfirmButton: false,
      timer: 1500
     })
      
      }

      <form onSubmit={handleTip} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Tip Title"
          required
          className="w-full input input-bordered"
        />

        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          placeholder="Plant Type / Topic"
          required
          className="w-full input input-bordered"
        />

        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="w-full select select-bordered"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          placeholder="Tip Description"
          required
          className="w-full textarea textarea-bordered"
        ></textarea>

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full input input-bordered"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full select select-bordered"
        >
          <option>Composting</option>
          <option>Plant Care</option>
          <option>Vertical Gardening</option>
        </select>

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full select select-bordered"
        >
          <option>Public</option>
          <option>Hidden</option>
        </select>

        <input
          type="text"
          name="name"
          value={formData.name}
          readOnly
          className="w-full input input-bordered"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          readOnly
          className="w-full input input-bordered"
        />

        <button type="submit" className="btn btn-success w-full">Submit Tip</button>
      </form>
    </div>
    </Zoom>
  );
};

export default ShareGardenTip;
