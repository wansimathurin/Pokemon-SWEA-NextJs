"use client"

import Link from "next/link";
import { useState } from "react";
import {FaHeart } from "react-icons/fa";

export default function Home() {
  const [counter, setCounter] = useState(0)
  const [textEntered, setTextEntered] = useState("")
  const [isClicked, setIsClicked] = useState(false);

  // const textEntered = ""; // This is just a placeholder, you can remove it if not needed.
//es6  
  const increment = () => {
    setCounter(counter + 1);
  };
  // vanilla js
  const decrement =()=> {
    setCounter(counter == 0? counter : counter - 1);
  }
  return (
    <>
   
    <div className="bg-amber-600 h-fit flex items-center justify-center flex-col">
        
      <img src="/chicken.jpg" alt="chicken" width={300} />
      <FaHeart size={50} onClick={()=>setIsClicked(!isClicked)} color={isClicked ? "red":"#fff"} className="cursor-pointer" />
    
      <form >
        <input value={textEntered} onChange={(e)=>setTextEntered(e.target.value)} className="bg-white px-3 py-3" type="text" placeholder="enter your message" />
      </form>


      <h1 className="text-5xl text-white font-bold">Text entered : {textEntered} </h1>
      <h1 className="text-9xl text-white font-bold">{ counter }</h1>
       
      <div className="flex gap-5 mb-10">
        <button onClick={()=>increment()} className="bg-green-800 text-white cursor-pointer px-5 py-2">+ increment</button>
        <button onClick={()=>decrement()} className="bg-red-800 text-white cursor-pointer px-5 py-2">- decrement</button>
      </div>
      <button onClick={()=>setCounter(0)} className="bg-black text-white cursor-pointer px-5 py-2">reset</button>


       <Link href={"/contact"} className="bg-violet-700 px-5 py-2">Click me</Link>
    </div>
    </>
  );
}
