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
    <div onClick={scrollToTop} className={visible?" visible transition-opacity ease-in duration-700 fixed text-white bottom-8 right-8 w-12 h-12 rounded-xl bg-[var(--font-color)] text-4xl flex justify-center items-center cursor-pointer hover:bg-black border-white border":"opacity-0"}>
        <FaAngleUp/>
    </div>
  )
}

export default MoveToTop