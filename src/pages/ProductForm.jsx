import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createGame, getGame, updateGame } from "../services/gameService";

export default function ProductForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditing = Boolean(id);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        platform: "",
        price: "",
    });
    const [error, setError] = useState("");

    useEffect(() => {
        if (!isEditing) return;

        getGame(id)
            .then((data) => {
                setFormData({
                    name: data.name ?? "",
                    description: data.description ?? "",
                    platform: data.platform ?? "",
                    price: data.price ?? "",
                });
            })
            .catch((err) => setError(err.message));
    }, [id, isEditing]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const game = {
                ...formData,
                price: Number(formData.price),
            };

            if (isEditing) {
                await updateGame(id, game);
            } else {
                await createGame(game);
            }

            navigate("/products");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="card">
            <h2>{isEditing ? "Edit Product" : "Add Product"}</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    className="input"
                    placeholder="Name"
                    value={formData.name}
                    required
                    onChange={(e) => setFormData({...formData, name: e.target.value })}
                />
                <input
                    className="input"
                    placeholder="Description"
                    value={formData.description}
                    required
                    onChange={(e) => setFormData({...formData, description: e.target.value })}
                />
                <input
                    className="input"
                    placeholder="Platform"
                    value={formData.platform}
                    required
                    onChange={(e) => setFormData({...formData, platform: e.target.value })}
                />
                <input
                    className="input"
                    type="number"
                    placeholder="Price"
                    min="0"
                    step="0.01"
                    value={formData.price}
                    required
                    onChange={(e) => setFormData({...formData, price: e.target.value })}
                />
                {error && <p className="error">{error}</p>}
                <button 
                    className="btn"
                    type="submit"
                >
                    {isEditing ? "Update Product" : "Add Product"}
                </button>
            </form>
        </div>
    );
}
