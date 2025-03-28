import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Page1 from "./pages/Page1"
import Page4 from "./pages/Page4"
import PageTres from './pages/Page3'
import Page2 from "./pages/Page2"

import './App.css'

function App() {

  return (
    <>
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path="/page4" element={<Page4 />} /> 
          <Route path="/page3" element={<PageTres />} /> 
          <Route path="/page1" element={<Page1 />} /> 
          <Route path="/page2" element={<Page2 />}/>
        </Routes>
      </BrowserRouter>
    </> 
  )

}

export default App
