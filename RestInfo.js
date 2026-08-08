import { useState } from "react";
import {addItems,Incrementitems,Decrementitems} from "../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function RestInfo({restData}){
    
    const dispatch = useDispatch();
    const items = useSelector(state => state.cartslice.items);

    const data = items.find(item => item.id === restData.id);
    const count = data ? data.quantity:0;
    function handle_additems(){
        dispatch(addItems(restData));
    }
    function handle_Incrementitems(){
        dispatch(Incrementitems(restData));
    }
    function handle_Decrementitems(){
        dispatch(Decrementitems(restData));
    }
    return(
        <div className="flex w-full justify-between mt-10 border-b border-gray-300 pb-5">
            <div className="w-[70%]">
                <p className="font-bold text-[20px]">{restData?.name}</p>
                <p className="font-bold"> {("defaultPrice" in restData) ? "₹" + restData?.defaultPrice/100 : "₹" + restData.price/100}</p>
                <span className="text-green-600 font-bold">{restData?.ratings?.aggregatedRating?.rating}</span>
                <span className="text-gray-500 text-sm">{"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}</span>
                <p className="mt-3 text-gray-600 line-clamp-2"> {restData?.description} </p>
            </div>
            <div className="w-[20%] relative h-42">
                <img className="w-full h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}></img>
                {
                    count == 0 ? (<button className="absolute bottom-1 left-20 rounded-xl text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white cursor-pointer" onClick={()=>handle_additems()}> ADD</button>):(
                        <div className="absolute bottom-1 left-15 flex gap-3 text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white rounded-2xl">
                            <button className="cursor-pointer" onClick={()=>handle_Decrementitems()}>-</button>
                            <span>{count}</span>
                            <button className="cursor-pointer" onClick={()=>handle_Incrementitems()}>+</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}