import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Authtication/AuthContext';

const UpdateMysingleTip = () => {
    const {user}=useContext(AuthContext);
    const navigate=useNavigate();
  const {
    title,
    topic,
    category,
    description,
    image,
    name,
    email,
    difficulty,
    availability,
    _id
  } = useLoaderData();
   const handleUpdate=(e)=>{
    e.preventDefault();

    const form=e.target;
    const formData=new FormData(form);
    const updateTip=Object.fromEntries(formData.entries())
    console.log(updateTip);
    
    fetch(`https://garden-hub-server-teal.vercel.app/tips/${_id}`,{
        method:'PUT',
        headers:{
                
            'Content-Type':'application/json',
        },
        body:JSON.stringify(updateTip)

    })
    .then(res=>res.json())
    .then(data=>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Tip update sucsessfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(`/my-tips/${user.email}`)
    })


   }
  

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4">Update Gardening Tip</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          name="title"
          defaultValue={title}
          placeholder="Tip Title"
          required
          className="w-full input input-bordered"
        />

        <input
          type="text"
          name="topic"
          defaultValue={topic}
          placeholder="Plant Type / Topic"
          required
          className="w-full input input-bordered"
        />

        <select
          name="difficulty"
          defaultValue={difficulty}
          className="w-full select select-bordered"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <textarea
          name="description"
          defaultValue={description}
          rows="4"
          placeholder="Tip Description"
          required
          className="w-full textarea textarea-bordered"
        ></textarea>

        <input
          type="text"
          name="image"
          defaultValue={image}
          placeholder="Image URL"
          className="w-full input input-bordered"
        />

        <select
          name="category"
          defaultValue={category}
          className="w-full select select-bordered"
        >
          <option value="Composting">Composting</option>
          <option value="Plant Care">Plant Care</option>
          <option value="Vertical Gardening">Vertical Gardening</option>
        </select>

        <select
          name="availability"
          defaultValue={availability}
          className="w-full select select-bordered"
        >
          <option value="Public">Public</option>
          <option value="Hidden">Hidden</option>
        </select>

        <input
          type="text"
          name="name"
          defaultValue={name}
          readOnly
          className="w-full input input-bordered"
        />

        <input
          type="email"
          name="email"
          defaultValue={email}
          readOnly
          className="w-full input input-bordered"
        />

        <button type="submit" className="btn btn-success w-full">
          Submit Tip
        </button>
      </form>
    </div>
  );
};

export default UpdateMysingleTip;
