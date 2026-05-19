# Game Dynasty

Game Dynasty is a React and Vite app for managing a small game shop. Users can view games, searchclea, see product details, add new games, edit existing games, and delete games.

## Rubric Features

- Uses React standard hooks such as `useState`, `useEffect`, `useMemo`, `useParams`, and `useNavigate`
- Uses a custom hook: `useGames`
- Supports full CRUD: create, read, update, and delete games
- Uses client-side routing with React Router
- Has clear navigation between the landing page, game list, add form, edit form, and detail page

## Main Routes

- `/` - Landing page
- `/products` - Game catalog
- `/products/:id` - Game details
- `/add-product` - Add game form
- `/edit/:id` - Edit game form

## Getting Started

Install dependencies:

```bash
npm install
```

Start the JSON Server API:

```bash
npx json-server db.json --port 5001
```

Start the React app in another terminal:

```bash
npm run dev
```

Open the app at:

```text
http://localhost:5173
```

## Local API

The app reads from:

```text
http://localhost:5001/games
```

The API base URL is stored in:

```text
src/api.js
```

## Project Structure

```text
src/
├── App.jsx
│
├── components/
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── SearchBar.jsx
│
└── pages/
    ├── LandingPage.jsx
    ├── ProductDetail.jsx
    ├── ProductForm.jsx
    └── ProductList.jsx
```

## Notes

Make sure JSON Server is running on port `5001` before using the catalog, add, edit, or delete features.
