import React from 'react'
import {useState} from 'react';

const Counter = () => {
        const [data,setData] = useState(0);
        const increase = () =>{setData(data + 1)}
        const decrease = () =>{setData(data - 1)}
  return (   
    <>
        <button onClick = {increase}>+</button>
        <p>Count:{data}</p>
        <button onClick = {decrease}>-</button>
    </>
  )
}

export default Counter