import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/pages/Home/Home.jsx';
import Errorpage from './components/pages/errorpage/Errorpage';
import About from './components/pages/About/About.jsx';
import Team from './components/pages/Team/Team.jsx';
import Services from './components/Services/Services.jsx';
import ContactFrom from './components/pages/ContactFrom/ContactFrom.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        
      },
      {
        path:'/about',
        element:<About></About>,
      },
      {
        path:'/team',
        element:<Team></Team>
      },
      {
        path:'/services',
        element:<Services></Services>,
        loader: ()=> fetch('/services.json')
      },
      {
        path:'/contact',
        element:<ContactFrom></ContactFrom>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='p-1'>
<React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
</div>
)
