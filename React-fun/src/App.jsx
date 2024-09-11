// import { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       title: "go to the gym",
//       description: "at 9Am",
//       completed: false,
//     },
//     {
//       title: "go to the store",
//       description: "at 10Am",
//       completed: true,
//     },
//   ]);

//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         title: "go shoot",
//         description: "at 11Am",
//       },
//     ]);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a random todo</button>
//       {todos.map((todo, index) => (
//         <Todo key={index} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// // Define the Todo component
// function Todo({ title, description }) {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default App;

import {useEffect, useState} from "react";
import axios from "axios";
function App(){

  const [todos, setTodos]= useState([]);

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(response){
      setTodos(response.data.todos);
    })
  },[]);

  return <div>
    {todos.map(todos => <Todo title={todos.title} description={todos.description} key={todos.title} />) }
  </div>
}


function Todo({title, description}){
    <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
    </div>

}
export default App;