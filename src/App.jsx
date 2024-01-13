import './App.css'

//Navbar....
import Navbar from './component/navbar/Navbar';

//Footer....
import Footer from './component/footer/Footer';

import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
  
    </>
  )
}

export default App;