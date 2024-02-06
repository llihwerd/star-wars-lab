import './ShipCard.css'
import { Link } from "react-router-dom"
import ShipDetails from '../ShipDetails/ShipDetail'

const ShipCard = (props) => {
  return ( 
    <section className="each-card">
      <Link 
        to={`/shipdetails/${props.ship.name}`}
        props={props.ship} >
          {props.ship.name}
      </Link>
    </section>
  )
}

export default ShipCard