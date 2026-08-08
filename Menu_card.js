import { useState } from "react"
import RestInfo from "./RestInfo"

export default function Menu_card({menuitems,selected,rating}){
    const [is_open,set_is_open] = useState(true);
    if("categories" in menuitems){
        return(
            <div className="w-full">
                <p>{menuitems.title}</p>
                <div>
                    {
                        menuitems?.categories?.map((items) => <Menu_card key={items?.title}  menuitems={items} selected={selected} rating={rating}></Menu_card>)
                    }
                </div>
            </div>
        )
    }
    if(!is_open){
       return(
         <div className="w-full">
            <div className="flex justify-between w-full">
             <p className="text-2xl font-bold mt-3">{menuitems.title}</p>
             <button className="text-5xl mr-20 font-bold cursor-pointer" onClick={()=>set_is_open(!is_open)}>{is_open ? '^':'˅'}</button>
            </div>
            <div className="h-5 bg-gray-300 mt-2 mb-2"></div>         
         </div>
       )
    }
    let filtered_items = menuitems?.itemCards || [];
    // if veg is selected 
    if(selected == 'veg'){
        filtered_items = filtered_items.filter((food) => "isVeg" in food?.card?.info);
    }
    // selected
    if(selected == 'non-veg'){
        filtered_items = filtered_items.filter((food) => !("isVeg" in food?.card?.info));
    }
    // rating
    if(rating == true){
        filtered_items = filtered_items.filter((food) =>{   
            const rating = parseFloat(
                food?.card?.info?.ratings?.aggregatedRating?.rating || 0
            );
            return rating > 4
        });
    }

    return(
            <div className="w-full">
               <div className="flex justify-between w-full">
               <p className="text-2xl font-bold mt-3">{menuitems.title}</p>
               <button className="text-5xl mr-20 font-bold cursor-pointer" onClick={()=>set_is_open(!is_open)}>{is_open ? '^':'˅'}</button>
            </div>
            <div>
                {
                    filtered_items?.map((items)=> <RestInfo key = {items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
          </div>
    )
}