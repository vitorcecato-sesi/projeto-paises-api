import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
 import Page2 from './pages/Page2'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/page2' element= {<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
