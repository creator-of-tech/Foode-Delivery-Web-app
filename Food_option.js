import { imageGridCards } from "../Utils/Food_data"
import Food_card from "./Food_card"

export default function Food_option(){
    return(
        <>
         <h1 className="ml-50 mt-5 font-bold text-3xl">Order our best food options</h1>
         <div className="w-[80%] container mx-auto flex flex-wrap mt-10 gap-3">
            {
                imageGridCards.map((food_data)=> <Food_card key = {food_data.id} food_data = {food_data}></Food_card>) 
            }
         </div>
         
        </>
    )
}