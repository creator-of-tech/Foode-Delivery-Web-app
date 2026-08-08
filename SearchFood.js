import { useState , useEffect, useMemo } from "react";
import { useParams } from "react-router";
import RestInfo from "./RestInfo";

export default function SearchFood(){
    let {id} = useParams();
    const [Rest_data,setRestdata] = useState([]);   
    const [value,set_value] = useState('');
    const [all_items,set_all_items] = useState([]);
    useEffect(()=>{
             async function fetchData() {    
             const proxyServer = "https://cors-anywhere.herokuapp.com/"
             const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
             const response = await fetch(proxyServer+swiggyAPI);
             const data = await response.json(); 
             const temp_data = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
             const filter_data = temp_data.filter((items)=> 'title' in items?.card?.card);
             setRestdata(filter_data);

             const processed_data = getAllItems(temp_data);
             set_all_items(processed_data);
           }
            fetchData();
    },[id])
    
    function getAllItems(categories) {
        let items = [];
        const seen = new Set();
        categories.forEach(item => {
             const card = item?.card?.card;
              if ('categories' in card) {
                // nested: category -> sub-categories -> itemCards
                card.categories.forEach(subCat => {
                   if (subCat?.itemCards){
                       items = [...items, ...subCat.itemCards];
                   }
                });
              } 
              else if(card?.itemCards) {
                 items = [...items, ...card.itemCards];
             }
        });
        // duplicate check
        return items.filter(item=>{
            const id = item?.card?.info?.id;
            if(seen.has(id)){
                return false;
            }
            seen.add(id);
            return true;
        });
    }

    // if we get the reponse the well and fine else return an empty object
     const searchResults = value.trim()? all_items.filter(item =>
            item?.card?.info?.name?.toLowerCase().includes(value.toLowerCase())):[];

    return(
        <>
        <div className="w-[80%] mx-auto mt-20">
           <div className="relative flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="absolute left-4 w-6 h-6 fill-gray-500 pointer-events-none">
               <path d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z"></path>
             </svg>

            <input className="ml-3  w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"  placeholder="Search for restuarants" 
            onChange={(e) =>{
                const res = e.target.value;
                set_value(res);
            }}>
            </input>  
            </div>
        </div>
        {/* Search function */}

         <div className="w-[80%] mx-auto mt-10">
                {value.trim() && searchResults.length === 0 && (
                    <h1 className="text-center text-gray-600 mt-10 text-2xl">No dishes found {value}</h1>
                )}
                {/* it has an array */}
                {searchResults.map((item) => (
                    <RestInfo
                        key={item?.card?.info?.id}
                        restData={item?.card?.info}
                    />
                ))}
         </div>
        </>
    )
}