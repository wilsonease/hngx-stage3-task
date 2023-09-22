import "./App.css";
import { ImageGrid } from "./components/ImageGrid/ImageGrid";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header/Header";
import { useCallback, useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_MOVIE_URL;
const imgUrl = import.meta.env.VITE_IMAGE_URL;

const getTopRatedMoviesUrl = () =>
  `${baseUrl}/movie/top_rated?sort_by=popularity.desc&api_key=${apiKey}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const url = getTopRatedMoviesUrl();
      const response = await fetch(url);
      if (!response.ok) {
        setLoading(false);
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const movieResults = data.results.slice(0, 10);
      setMovies(movieResults);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Auth0Provider
      domain="dev-mugndnatv34x87aa.us.auth0.com"
      clientId="0YOKQru9s4qZXU7Rq91owND4CFMFbk1m"
      authorizationParams={{
        redirect_uri: import.meta.env.PROD
          ? "https://wilsonease.github.io/hngx-stage3-task"
          : window.location.origin,
      }}
    >
      <div>
        <Header />
        {movies.length ? (
          <ImageGrid
            initialImages={movies.map((movie) => {
              return `${imgUrl}${movie.poster_path}`;
            })}
            loading={loading}
          />
        ) : null}
      </div>
    </Auth0Provider>
  );
}

export default App;
