import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Upload from '../pages/upload'
import './App.css'

const handleUpload = async () => {
  
    
}
function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Upload/>}/>
      </Routes>
    </Router>
  )
}

export default App
