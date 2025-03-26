
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pais from './pages/Home'
import './App.css'

function App() {

  return (
    <>
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pais/>} />        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
