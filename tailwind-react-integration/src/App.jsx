import { useState } from 'react'
import reactLogo from './assets/react.svg'
import UserProfile from './components/UserProfile'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UserProfile />
      </div>
    </>
  )
}

export default App