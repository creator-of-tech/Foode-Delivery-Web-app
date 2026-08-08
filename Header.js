import { Link } from "react-router"
export default function Header(){
    return(
        <header className = "bg-[#ff5200] font-serif">
            <div className="flex justify-between container mx-auto py-8">
                <img className = "w-40 h-12"   src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
                <div className="text-white text-base font-bold flex gap-13 items-center">
                    <a target = "_blank"  href="https://www.swiggy.com/corporate/">Swiggy corporate</a>
                    <a target = "_blank" href="https://partner.swiggy.com/food/login">Partner with us</a>
                </div>
            </div>
            <div className="pt-16 pb-8 relative">
                <img  className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img  className = "h-110 w-60 absolute top-0 right-0"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="text-5xl text-white font-bold max-w-[60%] container mx-auto text-center">
                    Order Food and Groceries,discover the best resturants.Swiggy it
                </div>
                <div className="max-w-[70%] container mx-auto flex gap-5 mt-5">
                    <input className = "bg-white w-[40%] text-base px-2 py-4 rounded-2xl" type="text" placeholder="Delhi,India"></input>
                    <input className = "bg-white w-[55%] text-base px-2 py-4 rounded-2xl" type="text" placeholder="Search for restaurants and items for more"></input>
                </div>
                <div className="max-w-[80%] container mx-auto flex">
                  <Link to={"restaurant"} className="max-w-[40%] container mx-auto">
                     <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                  </Link>
                </div>
                
            </div>
            
        </header>
    )   
}