import React,{useState} from 'react'

const Counter = () => {
      const[count,setCount] = useState(0);
      const inc = () => {
        setCount(count + 1);
      }
      const dec = ()=> {
        setCount (count - 1);
      }
  return (
    <div style={{textAlign: "center"}}>
        <button onClick={inc}>Increment</button>
        <p>Count : {count}</p>
        <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default Counter