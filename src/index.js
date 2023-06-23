import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<NotFound />,
    children:[
      {index:true, element:<Videos />},
      {path:'/videos', element:<Videos />},
      {path:'/videos/watch/:videoId', element:<VideoDetail />},
      {path:'/videos/:keyword', element:<Videos />},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

