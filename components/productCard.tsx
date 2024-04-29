export default function Productcard(props:any){
    return <div className="h-60  w-64 border-2 border-gray-200  bg-white mx-5 rounded-sm shadow-sm flex-col justify-start items-start hover:scale-105 duration-150 cursor-pointer ">
        <div className="flex  justify-center items-center h-44 bg-gray-200">
        <img src={props.url} className="h-40 w-48  rounded-t-sm"></img>
        </div>
        <div className="pl-4">{props.name}</div>
        <div className="flex justify-between items-center px-4" >
            <div>items in stock: {props.stock}</div>
            <div>5⭐</div>
        </div>
    </div>
}