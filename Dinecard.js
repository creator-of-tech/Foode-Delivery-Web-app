export default function DineCard({Restdata}){
     
    return(
        <div className="max-w-sm flex-none">
          <a target = "_blank" href={Restdata.cta.link}>
            <div className="relative">
              <img className="w-80 h-50 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + Restdata?.info?.mediaFiles[0]?.url}></img>
              <p className="absolute bottom-4 left-4 text-xl text-white font-bold">{Restdata?.info?.name}</p>
              <p className="absolute bottom-4 right-4 text-xl text-white font-bold">{Restdata?.info?.rating?.value}</p>
               <div className="absolute bg-linear-to from-black/80 to-transparent h-16 bottom-0 left-0 right-0"></div>
            </div>
          </a>
        </div>
    )
}