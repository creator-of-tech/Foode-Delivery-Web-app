export default function Food_card({food_data}){
    return(
        <>
        <a href={food_data?.action?.link}> <img className = "w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + food_data?.imageId}></img> </a> 
        </>
    )
}