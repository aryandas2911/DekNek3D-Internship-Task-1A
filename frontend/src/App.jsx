import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Upload from '../pages/upload.jsx'


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
