import { Edit, Eye, Trash2 } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router'; 
import Swal from 'sweetalert2';

const MySingleTip = ({ mySingleTip, onDelete }) => {
  if (!mySingleTip) return <p>Loading...</p>;

  const {
    title,
    topic,
    category,
    description,
    image,
    _id,
    name,
    email,
    difficulty,
    availability,
    likes
  } = mySingleTip;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://garden-hub-server-nqgqlnv42-skrased2006s-projects.vercel.app/tips/${id}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            Swal.fire("Deleted!", "Your tip has been deleted.", "success");
            onDelete(id); 
          } else {
            Swal.fire("Error!", "Tip not found or already deleted.", "error");
          }
        })
        .catch((error) => {
          console.error('Delete error:', error);
          Swal.fire("Error!", "Something went wrong. Please try again.", "error");
        });
      }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-3 max-w-md mx-auto">
      <img
        src={image || 'https://via.placeholder.com/300x200'}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-2xl font-semibold text-green-700">{title}</h2>
      <p className="text-sm text-gray-600"><strong>Topic:</strong> {topic}</p>
      <p className="text-sm text-gray-600"><strong>Category:</strong> {category}</p>
      <p className="text-sm text-gray-600"><strong>Difficulty:</strong> {difficulty}</p>
      <p className="text-sm text-gray-600"><strong>Availability:</strong> {availability}</p>
      <p className="text-gray-700 mt-2"><strong>Description:</strong> {description}</p>
      <h2 className=' text-xl font-bold'>Total Likes:<span className='text-yellow-500'> {likes}</span></h2>
      <div className="text-xs text-gray-500 italic mt-4 flex justify-between">
        <div>
          <p>Submitted by: {name || "Anonymous"}</p>
          <p>{email}</p>

       
        </div>
        <div className="flex items-center space-x-4">
          <Link to={`/shirtDeatials/`}>
            <button aria-label="View" className="text-blue-600 hover:text-blue-800" title="View">
              <Eye size={20} />
            </button>
          </Link>

          <Link to={`/updateMySingleTip/${_id}`}>
            <button aria-label="Edit" className="text-yellow-600 hover:text-yellow-800" title="Edit">
              <Edit size={20} />
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            aria-label="Delete"
            className="text-red-600 hover:text-red-800"
            title="Delete"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MySingleTip;

