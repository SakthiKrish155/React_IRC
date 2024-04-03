import React from 'react'

const InlineStyling = () => {
  return (
    <div>
        <h1 style={{color:"green"}}>Inline Style in JSX Example</h1>
        <div style={{backgroundColor:"lightblue",color:"darkblue",padding:"10px",border:"solid 1px blue",borderRadius:"5px"}}>
          <p style={{color:"blue",fontSize:"16px"}}>This is a paragraph with inline styles appliead</p>
        </div>
    </div>
  )
}

export default InlineStyling