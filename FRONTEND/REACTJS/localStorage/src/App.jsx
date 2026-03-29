import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")) || 0);

  return (
    <div>
      <button onClick={ () => {
        setCount(prev => {
          let newCount = prev + 1;
          localStorage.setItem("count", JSON.stringify(newCount));
          return newCount;
        })
      }}>Click</button>
      <h1>Count is {count}</h1>
    </div>
  )
}

export default App
