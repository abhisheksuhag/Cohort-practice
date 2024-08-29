import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to the gym",
      description: "at 9Am",
      completed: false,
    },
    {
      title: "go to the store",
      description: "at 10Am",
      completed: true,
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "go shoot",
        description: "at 11Am",
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

// Define the Todo component
function Todo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default App;
