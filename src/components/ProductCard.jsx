import { Link } from "react-router-dom";
import { getImageUrl } from "../imageAssets";
import { formatPrice } from "../utils/gameUtils";

export default function ProductCard({ product, onDelete }) {
    return (
        <div className="product-card">
            {product.image && (
                <img
                    className="product-image"
                    src={getImageUrl(product.image)}
                    alt={product.name}
                />
            )}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>platform: {product.platform}</p>
            <p>Price: {formatPrice(product.price)}</p>
            <div className="card-actions">
                <Link to={`/products/${product.id}`}>View Details</Link>
                <Link to={`/edit/${product.id}`}>Edit</Link>
                <button
                    className="link-button"
                    type="button"
                    onClick={() => onDelete(product.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
