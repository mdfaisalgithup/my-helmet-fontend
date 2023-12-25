import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './MainRoot/MainRoot';
import Error404 from './Pages/Error404/Error404';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Single from './Pages/Single/Single';
import AuthProvider from './AuthProvider/AuthProvider';


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404></Error404>,
    element: <MainRoot></MainRoot>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }, {
        path: "/shop",
        element: <Shop></Shop>
      },
       {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/single/:id",
        element: <Single></Single>
      }

    ]
  },
 
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>

    <AuthProvider>
    <RouterProvider router={router} />
</AuthProvider>

</QueryClientProvider>

  </React.StrictMode>,
)
