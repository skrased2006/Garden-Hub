import React, { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Authtication/AuthContext';
import Swal from 'sweetalert2';
import './Navbar.css'

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    logout()
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You are logged out',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
    <div className="bg-white text-black shadow-md sticky top-0 z-50
    
    ">
      <div className="max-w-7xl mx-auto py-3 px-6 w-full">
      
        <div className="flex items-center justify-between md:hidden">
          <Link to="/">
            <img
              className="h-[60px] w-[80px] object-cover"
              src="https://i.ibb.co/7JmLxTZ9/images-5.png"
              alt="Logo"
            />
          </Link>
          <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        
        <div
          className={`flex flex-col md:flex-row items-start md:items-center justify-between md:gap-6 gap-4 md:static absolute left-0 w-full md:w-auto bg-white md:bg-transparent px-6   md:px-0 transition-all duration-300 ${
            menuOpen ? 'top-[80px]' : '-top-[500px]'
          }`}
        >
        
          <div className="hidden md:block">
            <Link to="/">
              <img
                className="h-[60px] w-[80px] object-cover"
                src="https://i.ibb.co/7JmLxTZ9/images-5.png"
                alt="Logo"
              />
            </Link>
          </div>

       
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <NavLink to="/" className="text-gray-500 hover:text-green-600" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>

            {user && (
              <NavLink to="/shareGardenTip" className="text-gray-500 hover:text-green-600" onClick={() => setMenuOpen(false)}>
                Share a Garden Tip
              </NavLink>
            )}

            <NavLink to="/browseTips" className="text-gray-500 hover:text-green-600" onClick={() => setMenuOpen(false)}>
              Browse Tips
            </NavLink>

              <NavLink to="/exploreGardenTip" className="text-gray-500 hover:text-green-600" onClick={() => setMenuOpen(false)}>
                Explore Gardeners
              </NavLink>
          

            {user && (
              <NavLink to={`/my-tips/${user.email}`} className="text-gray-500 hover:text-green-600" onClick={() => setMenuOpen(false)}>
                My Tips
              </NavLink>
            )}
             
              
          </div>

        
          {user ? (
            <div className="flex gap-3 relative mt-2 md:mt-0 ">
              <div
     className="tooltip tooltip-bottom"
     data-tip={user?.email || 'No Email'}
    onClick={() => setShowLogout(!showLogout)}
   >
     <img
     src={user?.photoURL && user.photoURL.trim() !== "" ? user.photoURL : "https://img.icons8.com/?size=80&id=108652&format=png"}

      alt="User"
    className="w-8 h-8 rounded-full cursor-pointer"
    />
   </div>

              {showLogout && (
                <button
                  onClick={handleLogout}
                  className="absolute top-20 -left-4 bg-red-500 text-white px-4 py-1 rounded-xl shadow-md z-10"
                >
                  Logout
                </button>
              )}
            </div>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="btn bg-blue-500 text-white rounded-2xl">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
