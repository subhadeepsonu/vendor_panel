import { useState } from "react";
function App(){
    const [count,setcount]=useState(0);
  return <div> <CustomButton count={count}  setcount={setcount} ></CustomButton>
</div>
}
function CustomButton(props:any){
  function Counthandler(){
    props.setcount(props.count+1);
  }
  return <button onClick={Counthandler}> count is {props.count} </button>
}
export default App