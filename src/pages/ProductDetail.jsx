import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getImageUrl } from "../imageAssets";
import { getGame } from "../services/gameService";
import { formatPrice } from "../utils/gameUtils";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        getGame(id)
            .then(setProduct)
            .catch((err) => setError(err.message));
    }, [id]);

    if (error) {
        return (
            <div className="detail-page">
                <p className="error">{error}</p>
                <Link to="/products">Back to products</Link>
            </div>
        );
    }

    if (!product) {
        return <p className="status">Loading product...</p>;
    }

    return (
        <div className="detail-page">
            {product.image && (
                <img
                    className="detail-image"
                    src={getImageUrl(product.image)}
                    alt={product.name}
                />
            )}
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Platform: {product.platform}</p>
            <p>Price: {formatPrice(product.price)}</p>
            <Link to="/products">Back to products</Link>
        </div>
    );
}
