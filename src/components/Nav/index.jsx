import { NavLink } from 'react-router-dom'
import Logo from '../Logo'

function Nav() {
  return (
    <nav className="nav">
      <Logo className="logo" />

      <ul className="nav__links">
        <li>Dashboard</li>
        <li className="active">
          <NavLink to="/Home">Products management</NavLink>
        </li>
        <li>Employees management</li>
        <li>Logout</li>
      </ul>
    </nav>
  )
}

export default Nav
