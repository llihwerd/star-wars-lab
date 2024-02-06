import ShipCard from "../ShipCard/ShipCard"
import getAllStarShips from '../../services/sw-api'
import { useEffect, useState } from "react"

const Ship = () => {
  const [ships, setShips] = useState([])

  useEffect(() => {
    const fetchShipData = async () => {
      const shipData = await getAllStarShips()
      setShips(shipData.results)
    }
    fetchShipData()
  }, [])
  console.log(ships)

  return (
    <ul>
      {ships.map((ship) => (
      <ShipCard 
        className="container"
        key={ship._id}
        ship={ship}
      />
      ))}
    </ul>
  )
}

export default Ship