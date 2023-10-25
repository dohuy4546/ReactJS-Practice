import "./Nav.scss"
import { NavLink } from "react-router-dom"
function Nav() {
    return (
        <div className="topnav">
            <NavLink activeClassName="active" exact to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/weather">Weather</NavLink>
            <NavLink to="/otp">OTP</NavLink>
            <NavLink to="/manga">Manga</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}
export default Nav