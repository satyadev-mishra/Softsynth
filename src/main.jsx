import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Pages....
import Home from './component/pages/Home';
import About from './component/pages/About';
import Courses from './component/pages/Courses';
import ApplyInternship from './component/pages/ApplyInternship';
import Faq from './component/pages/Faq';
import ContactUs from './component/pages/ContactUs';
import PageNotFound from './component/pages/PageNotFound.jsx';
import './index.css'
import {createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="internship" element={<ApplyInternship/>}/>
      <Route path="courses" element={<Courses/>}/>
      <Route path="faq" element={<Faq/>}/>
      <Route path="contact" element={<ContactUs/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
