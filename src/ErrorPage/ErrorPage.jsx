import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <img
                src="https://i.ibb.co/gZ47yYjL/404-page-cover.jpg"
                alt="Error Illustration"
                className="w-64 md:w-80 mb-8"
            />
            <h1 className="text-7xl font-bold text-red-500">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
                Oops! Page not found.
            </h2>
            <p className="text-gray-600 mt-2 mb-6">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow-md transition duration-300"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
