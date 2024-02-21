import './App.css'
import Ships from './components/Ships/Ships'
import { Route, Routes } from 'react-router-dom'
import ShipDetails from './components/ShipDetails/ShipDetail'
import Nav from './components/Nav/Nav'


function App() {

  return (
    <main>
      <Nav />
      <Routes>
        <Route path='/ships' element={
          <Ships 
          />
          }/>
          <Route
            path="/shipdetails/:shipId"
            element={<ShipDetails />}
          />
      </Routes>
    </main>
  )
}


export default App