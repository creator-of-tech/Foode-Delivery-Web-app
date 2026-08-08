import React,{useState,useEffect, useRef} from "react";
import { GrocerGridCard } from "../Utils/Grocery"
import Grocery_card from "./Grocery_card"


export default function Grocery_option(){
    const scroll_container = useRef(null);
    const scroll_left = ()=>{
        scroll_container.current.scrollBy({
              left:-600,
              behavior : 'smooth'
        });
        
    };
    const scroll_right = ()=>{
        scroll_container.current.scrollBy({
            left:600,
            behavior : 'smooth'
        });
    };
    return(
        <>
        <div className="flex">
          <h1 className="ml-40 mt-20 font-bold text-3xl">Shop groceries on Instamart</h1>
          <div className="relative left-155 top-20 text-2xl">
            <button className="cursor-pointer bg-gray-300 rounded-4xl h-15 w-15" onClick={scroll_left}>←</button>
            <button className="ml-10 cursor-pointer bg-gray-300 rounded-4xl h-15 w-15" onClick={scroll_right}>→</button>
          </div>
        </div>
          <div ref={scroll_container} className="w-[80%] container mx-auto mt-10 overflow-x-auto">
              <div className="flex gap-5">
                {
                    GrocerGridCard.map((grocery_data)=> <Grocery_card key = {grocery_data.id} grocery_data = {grocery_data}></Grocery_card>) 
                }
              </div>
           </div>        
        </>
    )
}