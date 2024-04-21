export default function Productcard(props:any){
    return <div className="h-52  w-52  bg-white m-5 rounded-sm shadow-sm flex-col justify-start items-start hover:scale-105 duration-100 ">
        <img src={props.url} className="h-40 w-52 rounded-t-sm"></img>
        <div className="pl-4">{props.name}</div>
        <div className="flex justify-between items-center px-4" >
            <div>Rs.{props.price}</div>
            <div>5⭐</div>
        </div>
    </div>
}