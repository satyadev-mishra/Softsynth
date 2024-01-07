import React, { useState } from 'react'
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { BiBot, BiUser } from "react-icons/bi";
import softsynthlogo from '../../images/softsynthlogo.png';
import typingAnimation from '../../images/typing-animation.gif';
import audio from '../../audio/chataudio.mp3';

const Chatbot = () => {
    const [showChatBox, setShowChatBox] = useState(false);
    const [userInput, setUserInput] = useState();
    const [displayUsermsg, setDisplayUsermsg] = useState([]);
    const [displayBoatmsg, setDisplayBoatmsg] = useState(true);

    function allChatBox(){
        setShowChatBox(!showChatBox);
        setTimeout(()=>{
            setDisplayBoatmsg();
        },2000);
    }


    const send = (e) => {
        e.preventDefault();
        const userInputValue = { userInput }
        if (userInput) {
            setDisplayUsermsg((b) => [...b, userInputValue])       
            setUserInput(""); //to blank input filed
            
        }
    }
    return (
        <>
            {showChatBox ?
                <div id="chat-box" className="drop-shadow-lg bg-white w-[250px]  md:w-[380px] h-[80vh] fixed z-[1000] top-2 right-5 ml-4 rounded ">
                    <div className="bg-[var(--bg-color)] w-full text-left text-white px-4 py-4 h-[30%] relative">
                        <img src={softsynthlogo} className="w-20 sm:w-24" />
                        <h3 className="text-md md:text-xl  font-semibold sm:my-2">Welcome to Softsynth</h3>
                        <p className="text-sm md:text-md font-normal">We are here to help you!</p>
                    </div>
                    <div className="chat-area h-[60%]  overflow-auto scroll-smooth">
                        <div className="boat-msg my-4 w-[90%] m-auto flex gap-4">
                            <BiBot className="shrink-0 text-white w-10 h-10 bg-gradient-to-r from-black to-[var(--font-color)]  p-2 rounded-full" />
                            {displayBoatmsg?
                            <img src={typingAnimation} className='w-14'/>:
                            <p  
                                className="boat-msg shrink-2 bg-[#ececec] py-1 leading-6 px-4 sm:text-lg rounded-tr-md rounded-bl-2xl rounded-br-md text-left text-sm">
                                Hello! Welcome to our website. May i kindly ask for your name, please?
                            </p>}
                            
                        </div>

                        {displayUsermsg.map((item) =>
                            <div id='user-msg' className="my-4 w-[90%] m-auto flex flex-row-reverse">
                                <BiUser
                                    className="shrink-0 text-white w-10 h-10 bg-gradient-to-r from-black to-[var(--font-color)]  p-2 rounded-full" />
                                <p
                                    className="shrink-2 mr-2 bg-[#ececec] py-1 leading-6 px-4 sm:text-lg rounded-tl-md rounded-br-2xl rounded-bl-md text-left text-sm">
                                    {item.userInput}</p>
                            </div>)
                        }
                    </div>

                    <form autoComplete='off' onSubmit={send} className='h-[10%] typing-area bg-white w-full border-2 border-gray-100 z-[900] rounded flex justify-evenly items-center'>

                        <input type="text" id="input-msg" name='userInput' value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder='Start typing...'
                            className="text-black w-[80%] outline-none bg-transparent placeholder:text-gray-600" />
                        <button type="submit"><IoMdSend className="text-2xl text-[var(--bg-color)] cursor-pointer" /></button>


                    </form>


                </div > : null
            }

            <div onClick={allChatBox} className='fixed flex items-center justify-center text-white right-5
        bottom-5 bg-[var(--font-color)] w-16 h-16 md:w-18 md:h-18 pl-4 rounded-full cursor-pointer z-50
        hover:bg-[#9d3232]'>
                
               { showChatBox ? <><audio src={audio} autoPlay className='hidden'></audio> <span id="close-icon" className=' absolute right-[30%] top-[20%] font-extrabold text-3xl cursor-pointer'>&#x2715;</span></> : <IoChatbubbleEllipsesSharp id="chat-icon" className=' text-3xl md:text-5xl mr-3.5' />}
            </div>
        </>
    )
}

export default Chatbot;