
import "./style.css"

let task=[]
function render(){
  let output=document.getElementById("onetask")
  output.innerHTML=""
  for(let i=0;i<task.length;i++){
    output.innerHTML+=`<div id="onetask" className="onetask"><input type="checkbox"></input>`+task[i].name


  }
}

// function addtask(){
//   const name = input-text.value
//   task.push({name:name})}


export default function Home() {
  return (
   <div className="background">
    <h1 className="task-list">TASK LIST</h1>
    <div>
    <button className="add-button">+</button>
    <button className="deleteall-button">delete all</button>
      <input id="input" className="input-text" type="text"placeholder="do something lazy ass"></input>
      <div id="onetask" className="onetask">
        <input type="checkbox"></input>
~
      </div>

         </div>
    <render/>
    <addtask/>
   </div>
  );
}
