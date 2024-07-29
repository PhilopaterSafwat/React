import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Notfound from './Component/Notfound/Notfound'
import Protfolio from './Component/Protfolio/Protfolio'
import ContactUs from './Component/ContactUs/ContactUs'


function App() {
  let routers = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'protfolio',element:<Protfolio/>},
      {path:'contact',element:<ContactUs/>},
      {path:'*',element:<Notfound/>}
    ]}
  ])
  return <RouterProvider router={routers}>
    <Layout></Layout>
  </RouterProvider>
}

export default App
