import { createContext } from 'react'
import './App.css'
import UseEffectReact from './Hooks/UseEffectReact'
import UseState from './Hooks/UseState'
import UseContextReact from './Hooks/UseContextReact';
import UseReducerReact from './Hooks/useReducerReact';
import UseMemoReact from './Hooks/UseMemoReact';
import UseCallBackReact from './Hooks/UseCallBackReact';
import UseRefReact from './Hooks/UseRefReact';
import UseCustomHook1 from './Hooks/UseCustomHook1';
import UseLayoutEffect from './Hooks/UseLayoutEffect';
import { UseIdReact } from './Hooks/UseIdReact';
import UseCustomeHook2 from './Hooks/UseCustomeHook2';
import UseCustomHook3 from './Hooks/UseCustomHook3';
import RecoilApp from './Recoil/RecoilApp';
import { RecoilRoot } from 'recoil';


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
      <UseReducerReact />
      <UseMemoReact />
      <UseCallBackReact />
      <UseRefReact />
      <UseLayoutEffect />
      <UseCustomHook1 />
      <UseIdReact />
      <UseCustomeHook2 />
      <UseCustomHook3 />
      <RecoilRoot>
        <RecoilApp/>
      </RecoilRoot>
    </div>
  )
}

export default App
