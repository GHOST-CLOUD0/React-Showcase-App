import { API_URL } from "../api";

async function parseResponse(res, errorMessage) {
    if (!res.ok) {
        throw new Error(errorMessage);
    }

    return res.json();
}

export async function getGames() {
    const res = await fetch(`${API_URL}/games`);
    return parseResponse(res, "Unable to load products");
}

export async function getGame(id) {
    const res = await fetch(`${API_URL}/games/${id}`);
    return parseResponse(res, "Product not found");
}

export async function createGame(game) {
    const res = await fetch(`${API_URL}/games`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(game),
    });

    return parseResponse(res, "Unable to add product");
}

export async function updateGame(id, game) {
    const res = await fetch(`${API_URL}/games/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(game),
    });

    return parseResponse(res, "Unable to update product");
}

export async function deleteGame(id) {
    const res = await fetch(`${API_URL}/games/${id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        throw new Error("Unable to delete product");
    }
}
