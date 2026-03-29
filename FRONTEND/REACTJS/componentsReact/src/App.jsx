import React from 'react'
import Card from './components/card.jsx'
import Navbar from './components/navbar.jsx'

const App = () => {
  const user = "Dibyanshu";
  const age = 20;
  return (
    <>
      <Navbar />
      <Card />
    </>
  )
}

export default App
