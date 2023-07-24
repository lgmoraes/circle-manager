import { NavLink } from 'react-router-dom'
import Logo from '../Logo'

function Nav() {
  return (
    <nav className="nav">
      <Logo className="logo" />

      <ul className="nav__links">
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/">Products management</NavLink>
        </li>
        <li>
          <NavLink to="employees">Employees management</NavLink>
        </li>
        <li>Logout</li>
      </ul>
    </nav>
  )
}

export default Nav
