import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { useGames } from "../hooks/useGames";
import { filterGames } from "../utils/gameUtils";

export default function ProductList() {
    const { games, error, loading, setError, deleteGame } = useGames();
    const [query, setQuery] = useState("");
    const filtered = useMemo(() => filterGames(games, query), [games, query]);

    const handleDelete = async (id) => {
        try {
            await deleteGame(id);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <main className="product-page">
            <h1>Game Shop</h1>
            <SearchBar onSearch={setQuery} />
            {error && <p className="error">{error}</p>}
            {loading && <p className="status">Loading games...</p>}
            {!loading && !error && filtered.length === 0 && (
                <p className="status">No games found.</p>
            )}
            <div className="product-grid">
                {filtered.map(game => (
                    <ProductCard
                        key={game.id}
                        product={game}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </main>
    );
}
