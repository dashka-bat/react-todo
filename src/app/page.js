import "./style.css";
function addtask() {
  const name = input - text.value;
  task.push({ name: name, status: "todo" });
}
let task = [];
function Render() {
  let output = document.getElementById("onetask");
  output.innerHTML = "";
  for (let i = 0; i < task.length; i++) {
    output.innerHTML +=
      `<div id="onetask" className="onetask"><input type="checkbox"></input>` +
      task[i].name +
      `</div>`;
  }
  Render();
  return (
    <div className="background">
      <h1 className="task-list">TASK LIST</h1>
      <div>
        <button onClick={addtask()} className="add-button">
          +
        </button>
        <button className="deleteall-button">delete all</button>
        <input
          id="input-text"
          className="input-text"
          type="text"
          placeholder="do something lazy ass"
        ></input>
        <div id="onetask" className="onetask">
          <input type="checkbox"></input>~
        </div>
      </div>
      <render />
      <addtask />
    </div>
  );
}

// function addtask(){
//   const name = input-text.value
//   task.push({name:name})}

export default function Home() {
  return (
    <>
      <Render />
    </>
  );
}
