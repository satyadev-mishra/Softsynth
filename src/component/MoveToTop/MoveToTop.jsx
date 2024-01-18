import React, {useState} from 'react'; 
import { FaAngleUp } from "react-icons/fa6";


const MoveToTop = () => {

    const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,
      behavior: "smooth",
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
    
  return (
    <div onClick={scrollToTop} className={visible?" visible opacity-60 transition-opacity ease-in duration-700 fixed text-white bottom-8 right-8 w-12 h-12 rounded-xl bg-black text-4xl flex justify-center items-center cursor-pointer hover:opacity-50":"opacity-0"}>
        <FaAngleUp/>
    </div>
  )
}

export default MoveToTop