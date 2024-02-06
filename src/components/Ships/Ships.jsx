import ShipCard from "../ShipCard/ShipCard"
import { useEffect, useState } from "react"
import * as apiService from '../../services/sw-api'

const Ship = () => {
  const [ships, setShips] = useState ([])

  useEffect (() => {
    const fetchShipData = async () => {
      const shipData = await apiService.getShips()
      setShips(shipData.results)
    }
    fetchShipData()
  },[])

  if (!ships.length) return <h2>Please wait...Loading Ships...</h2>

  return (
    <ul>
      <h1>All Ship Cards</h1>
      {ships.map((ship) => (
        <ShipCard
          className="container" 
          key={ship._id}
          ship = {ship}
        />
      ))}
    </ul>
  )
}

export default Ship