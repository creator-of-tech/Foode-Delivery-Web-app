import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import Menu_card from "./Menu_card";
import { addMenu } from "../Stored/MenuSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function Restaurant_menu(){
    // use paramaters extracts the url components
    let {id} = useParams();
    const [Rest_data,setRestdata] = useState([]);
    const [selected,set_selected] = useState(null);
    const [rating,set_rating] = useState(false);

    const dispatch = useDispatch();
    const cached_menu = useSelector(state => state.menuCache.menus[id]);  

    useEffect(()=>{
       if(cached_menu){
         setRestdata(cached_menu);
         return
       }    
       async function fetchData() {    
         const proxyServer = "https://cors-anywhere.herokuapp.com/"
         const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
         const response = await fetch(proxyServer+swiggyAPI);
         const data = await response.json(); 
         const temp_data = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
         const filter_data = temp_data.filter((items)=> 'title' in items?.card?.card);
         setRestdata(filter_data);
         dispatch(addMenu({id,menu : filter_data}));
       }
        fetchData();
    },[id,cached_menu,dispatch])
    // console.log(Rest_data);
    return(
        <>
        <div className="w-[80%] mx-auto mt-10 mb-20">
            <Link to={`/city/delhi/${id}/search`}>
                <p className="w-full text-center py-6 bg-gray-200 text-2xl rounded-4xl">Search for disher</p>
            </Link>
        </div>
        <div className="w-[80%] mt-10 ml-35">
              <button className={`text-2xl py-2 px-4 mr-2 border rounded-2xl cursor-pointer text-white ${selected === "veg"? "bg-green-600":"bg-gray-400"}`} onClick={()=>set_selected(selected === 'veg' ?null:'veg')}> Veg</button>
              <button className={`text-2xl py-2 px-4 mr-2 border rounded-2xl cursor-pointer text-white ${selected === "non-veg"? "bg-red-600":"bg-gray-400"}`} onClick={()=>set_selected(selected === 'non-veg'?null:'non-veg')}> Non-veg</button>
              <button className={`text-2xl py-2 px-4 mr-2 border rounded-2xl cursor-pointer text-white ${rating === true ? "bg-amber-300":"bg-gray-400" }`} onClick={()=> set_rating(!rating)}>Rating 4+</button>
        </div>
        <div className="w-[80%] mx-auto">
            {
                Rest_data.map((menuitems)=> <Menu_card key={menuitems?.card?.card?.title} menuitems = {menuitems?.card?.card} selected = {selected} rating = {rating}></Menu_card>)
            }
        </div>
        </>
    )
}