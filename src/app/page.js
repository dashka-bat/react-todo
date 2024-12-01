
"use client";
import { useState } from "react";

import "./style.css"


export default function Home() {
  const [Open,setopen]= useState(false);
  const addmodal=() =>{
    setopen(true);
  };
  const closemodal=() =>{
    setopen(false)
  };
  
  return (

   <div>
    <div className="body">
      <div>
<button onClick={addmodal}>+++++++</button>
{Open && (
<div>
<div style={{
  height:500,
  width:800,
  backgroundColor:"pink",
  margin:"auto",
  padding:48,color:"black"
}}>
<button onClick={closemodal}>XXXXXXXX
</button>
<input style={{border:"2px solid black",
                width: 256,
                height: 56,
                border: "1px solid black",
                padding: 4,
                color:"black"}} type="task">
                  



</input>




</div>





</div>





)



}
      </div>



<footer>
hi
</footer>

    </div>

   </div>
   
  );
}