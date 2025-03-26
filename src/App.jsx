
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pais from './pages/Home'
import './App.css'
import PageTres from './pages/Page3'

function App() {

  return (
    <>
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pais/>} />       
          <Route path='/page3' element={<PageTres/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
