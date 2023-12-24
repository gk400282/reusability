// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import { GoBell, GoCloud, GoAlertFill } from "react-icons/go"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card"> */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <Button className="m-2" primary outline rounded onClick={() => console.log("Clicked!")}><GoBell />Click me</Button>
        <Button className="m-2" secondary outline rounded>Buy Now</Button>
        <Button className="m-2" success outline onMouseEnter={() => console.log("Enters mouse!")}><GoCloud />Buy Now</Button>
        <Button className="m-2" warning rounded>Buy Now</Button>
        <Button className="m-2" danger outline rounded onMouseLeave={() => console.log("Mouse leaves!")}><GoAlertFill />Buy Now</Button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
