import './ShipDetail.css'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getShipData } from '../../services/sw-api'

const ShipDetails = () => {
  const { id } = useParams()
  const [ship, setShip] = useState({})

  useEffect(() => {
    const fetchShip = async () => {
      try {
        const data = await getShipData(id)
        setShip(data)
      } catch (error) {
        console.error('Error fetching sship details:', error)
      }
    }

    fetchShip();
  }, [id])

  if (!ship.name) return <h1>Loading details...</h1>

  return (
    <div>
      <h1>Ship Details</h1>
      <p>Name: {ship.name}</p>
      <p>Model: {ship.model}</p>
      <Link to="/ships">Return to Starship List</Link>
    </div>
  )
}

export default ShipDetails