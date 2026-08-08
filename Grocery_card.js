export default function Grocery_card({grocery_data}){
    return(
        <>
        <div className="flex flex-col min-w-40">
          <a href={grocery_data?.action?.link}> <img className = "w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + grocery_data?.imageId}></img> </a> 
          <h2>{grocery_data.action.text}</h2>
        </div>
        </>
    )
}