import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from './AuthContext';
import Swal from 'sweetalert2';
import { Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const navigate=useNavigate();
    const{ createUser,user,setUser,googleLogin}=useContext(AuthContext);

    const [showPassword,setShowPassword]=useState(false);
    const handleGoogleLogin = (e) =>{
       e.preventDefault();
       googleLogin()
       .then((res) => {
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
       })
       .catch((error) => {
         Swal.fire({
           icon: 'error',
           title: 'Google Sign-in Failed!',
           text: error.message,
         });
       });
   
      }
   

    const handleRegister =(e)=>{ 
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form);
        const  {email,password,...newUser}=Object.fromEntries(formData.entries());
       console.log(newUser);
        createUser(email,password)
        .then(result=>{
            console.log(result)
            Swal.fire({
                title: "Congratulations!",
                text: "Your account has been created successfully.",
                imageUrl: "https://cdn.shopify.com/s/files/1/0275/6457/2777/articles/050eef32fe16075ac9a3310a1d310593.jpg?v=1652231425",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Success Image",
                confirmButtonColor: "#6366F1",
                confirmButtonText: "Awesome!"
              });
              navigate('/')

            
        })
        .catch((error) => {
            console.error('Sign Up Error:', error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.message,
            });
          });
          form.reset()

    }

    


    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100">
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md animate-fade-in-up">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Create an Account</h2>

      <form onSubmit={handleRegister}  className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Full Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        
       
        <input
          name="photo"
          type="photoUrl"
          placeholder="Photo URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
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
          className="w-full py-2 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300"
        >
          Sign Up
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
        Already have an account?{' '}
        <Link to="/login">
          <span className="text-purple-600 cursor-pointer hover:underline">Login</span>
        </Link>
      </p>
    </div>
  </div>
    );
};

export default Register;