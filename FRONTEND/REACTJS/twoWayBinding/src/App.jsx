import React, {useState} from 'react'

const App = () => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted by " ,title);
        setTitle('');
      }}>
        <input value={title} type="text" placeholder='Enter your name' onChange={(e) => {
          setTitle(e.target.value);
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
