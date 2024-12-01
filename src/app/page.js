
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
<button className="add-button" onClick={addmodal}>+</button>
{Open && (
<div >
<div style={{
  marginTop:20,
  height:500,
  width:800,
  backgroundColor:"pink",
  margin:"auto",
  padding:0,color:"black"
}}>
<button className="close-button" onClick={closemodal}>X
</button>
<input style={{border:"2px solid black",
                width: 256,
                height: 56,
                marginLeft:"12vw",
               
                border: "1px solid black",
                
                color:"black"}} type="task">
                  



</input>


<button style={{display:"flex"}}>submit</button>

</div>





</div>





)



}
      </div>



<footer>{Open}
</footer>

    </div>

   </div>
   
  );
}