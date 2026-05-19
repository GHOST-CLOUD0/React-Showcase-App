import { Link } from "react-router-dom";
import landingImage from "../images/Landing Page.jpeg";

export default function LandingPage() {
    return (
        <div
            className="landing-page"
            style={{ backgroundImage: `linear-gradient(rgba(15, 12, 41, 0.72), rgba(15, 12, 41, 0.72)), url(${landingImage})` }}
        >
            <div className="hero">
                <h1>Welcome to <span>Game Dynasty</span></h1>
                <p>
                    Manage your favorite <strong>games</strong>, <strong>consoles</strong>, and <strong>accessories</strong> with ease.
                </p>
                <div className="cta-buttons">
                    <Link to="/products" className="btn">
                        Explore Games
                    </Link>
                    <Link to="/add-product" className="btn btn-secondary">
                        Add Product
                    </Link>
                </div>  
            </div>
        </div>
    );    
}
