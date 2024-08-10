import { useState } from 'react'
import Card from './components/card'
import './App.css'


function App() {
  

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Css </h1>
      <Card username={"Satish"} btnText={'visit me'}/>
      <Card username={"Aditya"} btnText={'click me'}/>

    </>
  )
}

export default App
