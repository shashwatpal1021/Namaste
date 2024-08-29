import { createContext } from 'react'
import './App.css'
import UseEffectReact from './Hooks/UseEffectReact'
import UseState from './Hooks/UseState'
import UseContextReact from './Hooks/UseContextReact';


export const ThemeContext = createContext('light');

function App() {

  return (
    <div className="flex flex-col justify-center text-center">
      <h1 >
        Hello world!
      </h1>
      <UseState />
      <UseEffectReact />
      <ThemeContext.Provider value="dark">
        <UseContextReact />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
