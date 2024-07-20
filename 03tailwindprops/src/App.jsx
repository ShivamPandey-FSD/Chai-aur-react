import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Components/Card'

function App() {
  
  return (
    <>
      <h1 className='bg-red-500 text-white mb-4'>Tailwind CSS</h1>
      <Card username="chaiaurcode" btnText="visit" />
      <Card username="chaiaurreact" />
    </>
  )
}

export default App
