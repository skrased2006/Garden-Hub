import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router'; 
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';


const MainLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); 

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <Loading />;
    }

    return (
        <div className='min-h-screen flex flex-col'>
            <header>
                <nav >
                    <Navbar />
                </nav>
            </header>

            <main className='flex-grow'>
                <Outlet />
            </main>
            
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;


