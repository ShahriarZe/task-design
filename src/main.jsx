import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Routes from './Routes/Routes.jsx';
import Payment from './components/Payment/Payment.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    children:[
      {
        path:'/',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/payment',
        element:<Payment></Payment>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
