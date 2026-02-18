import React from 'react'

const App = () => {
  return (
    <div>
      <form onSubmit={(elem) => {
        elem.preventDefault();
        console.log("Form Submitted");
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
