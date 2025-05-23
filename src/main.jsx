import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import { RouterProvider } from 'react-router';
import { router } from './Routes';
import AuthProvider from './Authtication/AuthProvider';
import ThemeProvider from './ThemeContext/ThemeContext';
import './index.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ThemeProvider>
<AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
   </ThemeProvider>
      
 
  </StrictMode>
);
