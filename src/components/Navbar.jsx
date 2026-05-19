import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">
                Game Dynasty Admin
            </h2>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/products">Games</Link>
                    <Link to="/add-product">Add Product</Link>
                </li>
            </ul>
            
        </nav>
    )
}
