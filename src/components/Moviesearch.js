import React, { useState } from "react";
import Moviecards from "./Moviecards";

export default function Moviesearch() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        if (query) {
            e.preventDefault();

            const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

            try {
                const res = await fetch(url);
                const data = await res.json();
                setMovies(data.results);
            } catch (e) {
                console.log(e);
            }

            // reset input value
            var input = document.querySelector(".moviesearch--input");
            console.log(input);
            input.value = "";
        }
    };

    return (
        <div className="moviesearch">
            <form onSubmit={searchMovies} className="moviesearch--form">
                <input
                    className="moviesearch--input"
                    type="text"
                    name="query"
                    placeholder="movie name"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required="True"
                />
                <button className="moviesearch--button" type="submit">
                    Search
                </button>
            </form>
            <div className="card-list">
                {movies
                    .filter((movie) => movie.poster_path)
                    .map((movie) => (
                        <Moviecards movie={movie} key={movie.id} />
                    ))}
            </div>
        </div>
    );
}
