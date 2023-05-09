import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent navbar-light" style={{ padding: "0% 5%" }}>
            <div className="container-fluid">
                <Link className=" font1 text-decoration-none text-white bg-md-transparent bg-red rounded-bottom shadow-sm" to="/" style={{ fontSize: "1.75rem", padding: "10px 32px", fontWeight: "bold", letterSpacing: "0.9px" }}>Tripo Games</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav bg-md-transparent bg-white rounded-bottom shadow-lg padd">
                        <li className="nav-item" style={{ padding: "14px 25px", fontWeight: "medium" }}>
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown" style={{ padding: "14px 25px", fontWeight: "medium" }}>
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Games
                            </Link>
                            <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/">Kipon</Link></li>
                                <li><Link className="dropdown-item" to="/">Robotrix</Link></li>
                                <li><Link className="dropdown-item" to="/">Treasure Box</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item" style={{ padding: "14px 25px", fontWeight: "medium" }}>
                            <Link className="nav-link" to="/careers">Careers</Link>
                        </li>
                        <li className="nav-item" style={{ padding: "14px 25px", fontWeight: "medium" }}>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item" style={{ padding: "14px 25px", fontWeight: "medium" }}>
                            <a className="nav-link" aria-current="page" href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
