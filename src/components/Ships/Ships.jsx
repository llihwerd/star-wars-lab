import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getShips } from '../../services/sw-api'

const Ship = () => {
  const [ships, setShips] = useState ([])

  useEffect (() => {
    const fetchShipList = async () => {
      try {
        const shipData = await getShips()
        setShips(shipData.results)
      } catch (error) {
        console.error('Error fetching starship list:', error)
      }
    }
    fetchShipList()
  },[])


  if (!ships.name) return <h1>Loading Ships...</h1>

return (
  <main>
    <h1>All Ships</h1>
    {ships.map(ship => (
      <div key={ship.url} className="starship-card">
        <Link to={`/ships/${ship.url.split('/').slice(-2, -1)[0]}`} className="ship-link">
          {ship.name}
        </Link>
      </div>
    ))}
  </main>
)
}

export default Ship