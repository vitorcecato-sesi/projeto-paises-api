import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Page1 from "./pages/Page1"
import './App.css'
import PageTres from './pages/Page3'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />       
          <Route path='/page3' element={<PageTres/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
