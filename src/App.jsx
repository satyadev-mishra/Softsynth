import './App.css'

//Navbar....
import Navbar from './component/navbar/Navbar';

//Footer....
import Footer from './component/footer/Footer';

import { Outlet } from 'react-router-dom';
import MoveToTop from './component/MoveToTop/MoveToTop';

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <MoveToTop/>
  
    </>
  )
}

export default App;