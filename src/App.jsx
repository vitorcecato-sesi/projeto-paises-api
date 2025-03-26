
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pais from './pages/Home'
import Page1 from "./pages/Page1"
import './App.css'

function App() {

  return (
    <>
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pais/>} /> 
          <Route path="/informacoes1" element={<Page1 />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
