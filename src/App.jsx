import { useState } from 'react'
import Navbar from './components/Navbar';
import ImageCarousel from './components/Carousel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Text from './components/Text'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
          <ImageCarousel /> 
          <Text />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
