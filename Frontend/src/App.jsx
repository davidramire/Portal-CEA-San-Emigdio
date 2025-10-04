import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      <div className="flex justify-center gap-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img 
            src={viteLogo} 
            className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#646cffaa]" 
            alt="Vite logo" 
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img 
            src={reactLogo} 
            className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#61dafbaa]" 
            alt="React logo" 
          />
        </a>
      </div>
      <h1 className="text-4xl font-bold my-8">Vite + React</h1>
      <div className="p-8 rounded-lg bg-white/5">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="btn bg-primary hover:bg-primary/90"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="font-mono bg-white/10 rounded px-2 py-1">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-400 mt-8">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
