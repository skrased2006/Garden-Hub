import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from './AuthContext';
import Swal from 'sweetalert2';
import { Eye, EyeOff } from 'lucide-react';
import {  Zoom } from 'react-awesome-reveal';

const Login = () => {

  const navigate=useNavigate();

  const [showPassword,setShowPassword]=useState(false);


  const {login,googleLogin,user}=useContext(AuthContext);


  const handleLogin=(e)=>{
    e.preventDefault();

    const form=e.target;
   const email=form.email.value;
   const password=form.password.value;
   console.log(email,password);
   login(email,password)
   .then((res) => {
    console.log(res);
    Swal.fire({
      title: 'Welcome Back!',
      text: `Welcome ${res.user?.displayName || 'User'}!`,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0275/6457/2777/articles/050eef32fe16075ac9a3310a1d310593.jpg?v=1652231425',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Login Success',
      confirmButtonColor: '#6366F1',
      confirmButtonText: 'Let’s Go!',
    });
    form.reset();
  })
  .catch((error) => {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed!',
      text: error.message,
    });
  });
};
   const handleGoogleLogin = (e) =>{
    e.preventDefault();
    googleLogin()
    .then((res) => {
      console.log(res);
      Swal.fire({
        title: 'Google Sign-in Success!',
        text: `Welcome ${res.user?.displayName || 'User'}!`,
        imageUrl:
          'https://cdn.shopify.com/s/files/1/0275/6457/2777/articles/050eef32fe16075ac9a3310a1d310593.jpg?v=1652231425',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Google Login Success',
        confirmButtonColor: '#6366F1',
        confirmButtonText: 'Nice!',
     
      });
      navigate('/')
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Google Sign-in Failed!',
        text: error.message,
      });
    });

 

   }

  

   

    return (
       <Zoom>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
          
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Login</h2>
  
          <form onSubmit={handleLogin}   className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          <div className="relative">
      <input
    name="password"
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
    required
     />
     <button
      type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
     >
      {showPassword ? <Eye /> : <EyeOff />}
  </button>
</div>



            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300"
            >
              Sign In
            </button>
          </form>
  
          <div className="my-4 text-center text-gray-500">— OR —</div>
  
          <button
          onClick={handleGoogleLogin}
            
            className="w-full py-2 flex items-center justify-center border border-gray-300 rounded-xl hover:bg-gray-100 transition-all duration-300"
          >
            <FcGoogle className="text-xl mr-2" />
            Sign in with Google
          </button>
  
          <p className="text-sm text-gray-500 text-center mt-4">
            Don&apos;t have an account?{' '}
            <Link to="/register">
              <span className="text-purple-600 cursor-pointer hover:underline">Register</span>
            </Link>
          </p>
        </div>
          
      </div>
      </Zoom>
    
    );
};

export default Login;