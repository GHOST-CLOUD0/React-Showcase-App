import { useEffect, useState } from "react";
import { deleteGame as deleteGameRequest, getGames } from "../services/gameService";

export function useGames() {
    const [games, setGames] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGames()
            .then((data) => {
                setGames(data);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const deleteGame = async (id) => {
        setError("");
        try {
            await deleteGameRequest(id);
            setGames((currentGames) => currentGames.filter((game) => game.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    return {
        games,
        error,
        loading,
        setError,
        deleteGame,
    };
}
