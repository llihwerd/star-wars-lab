import {NavLink} from "react-router-dom"

const Nav = () => {
  return ( 
    <nav className="nav-bar">
      <NavLink to='/ships'>Ships</NavLink>
    </nav>
  );
}

export default Nav