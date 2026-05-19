export function filterGames(games, query) {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
        return games;
    }

    return games.filter((game) =>
        game.name.toLowerCase().includes(normalizedQuery)
        || game.description.toLowerCase().includes(normalizedQuery)
        || game.platform.toLowerCase().includes(normalizedQuery)
    );
}

export function formatPrice(price) {
    return `$${Number(price).toFixed(2)}`;
}
