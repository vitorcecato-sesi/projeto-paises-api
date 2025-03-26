
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Page4 from './pages/Page4'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/page4' element={<Page4 />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
