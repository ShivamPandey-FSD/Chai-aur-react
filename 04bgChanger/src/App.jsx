import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-screen h-screen duration-100' style={{backgroundColor: color}}>
      <div className='fixed right-16 left-16 flex flex-wrap justify-center bg-white shadow-3xl bottom-12 text-black px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 shadow-lg rounded-full text-white' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 shadow-lg rounded-full text-white' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 shadow-lg rounded-full text-white' style={{ backgroundColor: "yellow" }}>Yelloow</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 shadow-lg rounded-full text-white' style={{ backgroundColor: "black" }}>Black</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 shadow-lg rounded-full text-white' style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 shadow-lg rounded-full text-white' style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 shadow-lg rounded-full text-white' style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => setColor("lavender")} className='outline-none px-4 py-1 shadow-lg rounded-full text-white' style={{ backgroundColor: "lavender" }}>Lavender</button>
        </div>
      </div>
    </div>
  )
}

export default App
