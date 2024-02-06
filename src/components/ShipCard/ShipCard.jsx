import './ShipCard.css'

const ShipCard = (props) => {
  return ( 
    <section className="each-card">
      {props.ship.name}
    </section>
  )
}

export default ShipCard