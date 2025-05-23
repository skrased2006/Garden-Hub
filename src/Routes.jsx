import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout/MainLayout";
import Homepage from "./Homepage/Homepage";
import Login from "./Authtication/Login";
import Register from "./Authtication/Register";
import ShareGardenTip from "./ShareGardenTip/ShareGardenTip";
import ExploreGardeners from "./ExploreGardeners/ExploreGardeners";
import TipDeatailsPage from "./TipDeatialsPage/TipDeatailsPage";
import MyTips from "./MyTips/MyTips";
import ErrorPage from "./ErrorPage/ErrorPage";
import BrowseTips from "./BrowseTips/BrowseTips";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import UpdateMysingleTip from "./MyTips/UpdateMysingleTip";

export const router = createBrowserRouter([
    {
      path: "/",
     Component:MainLayout,
     errorElement:<ErrorPage></ErrorPage>,
     children: [
        {
          index:true,
            path: "/",
            Component:Homepage

        },
        {
          path: "/shareGardenTip",
          Component:ShareGardenTip

        },
        {
          path:'login',
          Component:Login,
          
        },
        {
          path:'register',
          Component: Register
        },
        {
         
          path:'exploreGardenTip',
         
          Component:ExploreGardeners
        },
        {
          path: '/tipDeatialsPage/:id',
          loader: () => fetch('https://garden-hub-server-teal.vercel.app/tips'),
          element: 
          <PrivetRoute>
          <TipDeatailsPage />
          </PrivetRoute>
          
          
        },
        {
          path: '/my-tips/:email',
          loader: ({ params }) => fetch(`https://garden-hub-server-teal.vercel.app/tips/user/${params.email}`),
          element: <MyTips />
        },
        {
          path: '/updateMySingleTip/:id',
      loader:({params})=>fetch(`https://garden-hub-server-teal.vercel.app/tips/${params.id}`),

          Component: UpdateMysingleTip
        }
        
        ,
        {
          path:'/browseTips',
          loader:()=>fetch('https://garden-hub-server-teal.vercel.app/tips'),
          Component:BrowseTips
        },
        

        
        
     ]
    },
  ]);