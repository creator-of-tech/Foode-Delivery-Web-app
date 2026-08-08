import {dineoutRestaurants} from "../Utils/Dinedata"
import DineCard from "./Dinecard"


export default function Dineoption(){
    return(
        <div className="w-[80%] mx-auto mt-10">
            <h1 className="font-bold text-3xl"> Discover best restaurants on dineout </h1>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-5 mb-20">
                    {
                       dineoutRestaurants.map((Restdata) => <DineCard key = {Restdata?.info?.id} Restdata = {Restdata}></DineCard>)
                    }
            </div>
        </div>
    )
}