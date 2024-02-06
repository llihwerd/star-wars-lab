import { useState } from 'react'
import './App.css'
import Ships from './components/Ships/Ships'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ShipDetails from './components/ShipDetails/ShipDetails'
import Nav from './components/Nav/Nav'


function App() {

  return (
    <main>
      <Routes>
        <Route path='/ships' element={<Ships />}/>
      </Routes>
    </main>
  )
}
import { Form } from 'react-router-dom'


export default App