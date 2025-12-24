import { useState } from "react";

function Todo(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  )
}

function App(){
  const [todos , setTodos] = useState([{
    title: "go to gym",
    description: "go to gym from 7-9",
    completed : false,
  }, 
  {
    title: "Study DSA",
    description:"study DSA from 7-9",
    completed: true,
  }]);

  function addTodo(){
    setTodos([...todos, {
      title:"some random title",
      description:"Some random description"
    }])
  }

  return (
    <div>

      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function (todo){
        return <Todo title={todo.title} description={todo.description} />
      })}
    </div>
  )
}

export default App;



// import { useEffect, useState } from "react";
// import axios from "axios";

// function App({ id }) {
//   const [todo, setTodo] = useState(null);

//   useEffect(() => {
//     // Make sure you're using the correct prop here (id)
//     axios
//       .get(`https://sum-server.100xdevs.com/todos?id=${id}`)
//       .then(function (response) {
//         setTodo(response.data.todo); // Assuming response data is a single todo object
//       })
//       .catch(function (error) {
//         console.log("error fetching the todo: ", error);
//       });
//   }, [id]); // Correct dependency array

//   // Handle loading state
//   if (!todo) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Todo title={todo.title} description={todo.description} />
//     </div>
//   );
// }


// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h3>{description}</h3>
//     </div>
//   );
// }

// export default App;





// import {useState} from "react";

// function App(){

//   const [count, setCount] = useState(0);
//   return <div>
//     <button onClick={()=>{
//       setCount(count+1);
//     }}>Click Me {count}</button>
//   </div>

// }

// export default App;




// import { useState } from "react";
// function App(){
//   const [count, setCount] = useState(0);
//   console.log(count);
//   console.log(setCount);
  
   
//   function onClickHandler(){
//     setCount(count +1);
//   }
//   return (
//     <div>
//       <button onClick={onClickHandler}>Counter {count}</button>
//     </div>
//   )
// }

// // export default App;





// import { useState } from "react";

// function CustomButton( props){

//   function onClickHandler(){
//     props.setCount(props.count + 1);
//   }

//   return <button onClick={onClickHandler}>
//     Counter {props.count}
//   </button>
// }


// function App(){
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <CustomButton count={count} setCount={setCount}></CustomButton>
//     </div>
//   )
// }

// export default App;
















