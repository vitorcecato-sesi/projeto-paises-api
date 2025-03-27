import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Page1 from "./pages/Page1"
import Page4 from "./pages/Page4"
import './App.css'
import PageTres from './pages/Page3'

function App() {

  return (
    <>
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path="/page1" element={<Page1 />} /> 
          <Route path="/page4" element={<Page4 />} /> 
        </Routes>
      </BrowserRouter>
    </> 
  )

}

export default App
