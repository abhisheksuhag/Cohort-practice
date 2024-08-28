
import {useState} from "react";


function App() {
  const [count, setCount]= useState(0);
  console.log(count);
  console.log(setCount);



  function onClickHandler (){
    setCount(count + 1);
  }


  return(
    <div>
      <button onClick={onClickHandler}>Counter - {count}</button>
    </div>
  )
}

export default App
