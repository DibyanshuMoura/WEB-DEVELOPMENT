import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(1)
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={
        () => {
          setNum((prev) => prev + 1);
          setNum((prev) => prev + 1);
          setNum((prev) => prev + 1);
        }
      }>Click</button>
    </div>
  )
}

export default App
