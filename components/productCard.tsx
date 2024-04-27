export default function Productcard(props:any){
    return <div className="h-60  w-64 border-2 border-gray-200  bg-white mx-5 rounded-sm shadow-sm flex-col justify-start items-start hover:scale-105 duration-100 cursor-pointer ">
        <img src={props.url} className="h-44 w-64 rounded-t-sm"></img>
        <div className="pl-4">{props.name}</div>
        <div className="flex justify-between items-center px-4" >
            <div>items in stock: {props.stock}</div>
            <div>5⭐</div>
        </div>
    </div>
}