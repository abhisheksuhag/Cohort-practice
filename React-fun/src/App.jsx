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





import { useEffect, useState } from "react";
import axios from "axios";

function App({ id }) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    // Make sure you're using the correct prop here (id)
    axios
      .get(`https://sum-server.100xdevs.com/todos?id=${id}`)
      .then(function (response) {
        setTodo(response.data.todo); // Assuming response data is a single todo object
      })
      .catch(function (error) {
        console.log("error fetching the todo: ", error);
      });
  }, [id]); // Correct dependency array

  // Handle loading state
  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Todo title={todo.title} description={todo.description} />
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default App;
