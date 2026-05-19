import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");
    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch?.(e.target.value);
    };
    
    return (
        <input
            className="search-bar"
            type="text"
            placeholder="Search games, consoles, accessories..."
            value={query}
            onChange={handleChange}
        />
    )
}
