import { Link } from "react-router-dom"

export default function Header() {
    return (
      <div className="header-container">
          <h1> SAMSONS </h1>
          <div className="search-container">
            <ul>
              <input className="search-form" type="search" placeholder="Search" />
              <li><Link  className="btn" to="/auth/login"> Log in</Link> </li>         
              <li><Link  className="btn" to="/auth/register"> Register</Link> </li>         

            </ul>
          </div>
        </div>
    )
}