
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Restaurent from './Components/Restaurent'

function App() {

  return (
    <div className="m-auto bg-hero-pattern no-repeat bg-center bg-cover">
      <div className='w-3/4 m-auto'>
        <Header />
        <Main />
        <Restaurent />
      </div>
    </div>
  )
}

export default App
