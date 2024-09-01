import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      
        {/* <div>
          <div className='text-3xl '>Sign-IN</div>
          <SignIn/>
        </div>
        <div>
          <div className='text-3xl'>Sign-Up</div>
          <SignUp/>
        </div> */}


        <Routes>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path="/" element={<Dashboard/>} />
        </Routes>

    </>
  )
}

export default App
