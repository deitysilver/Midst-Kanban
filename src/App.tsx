import { createSignal } from 'solid-js'
import './App.css'

// import components
import Navbar from './Components/Navbar.tsx'


function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div class='bg-[#121212] h-screen w-full'>
      <Navbar />
    </div>
  )
}

export default App
