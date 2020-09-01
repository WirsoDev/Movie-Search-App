import React, { useState } from "react";
import Details from "./Details";

export default function Moviecards({ movie }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [modal, setModal] = useState("details--hide");

    function movieIdhandler() {
        setTitle(movie.title);
        setDescription(movie.overview);
        setRating(movie.vote_average);
        setModal("details");
    }

    function closeModal() {
        setModal("details--hide");
    }

    return (
        <>
            <div className="moviecards" key={movie.key}>
                <img
                    className="moviecards--img"
                    onClick={movieIdhandler}
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt="movie.title + ' poster'"
                />
                <h3 className="moviecard--title">{movie.title}</h3>
                <div className="moviecards--ratings">
                    <p className="moviecards--ratings--date">
                        {movie.release_date}
                    </p>
                    {movie.vote_average !== 0 ? (
                        <p
                            className={
                                movie.vote_average > 6
                                    ? "moviecards--ratings--rating"
                                    : null
                            }
                        >
                            <strong>{movie.vote_average}</strong>
                        </p>
                    ) : null}
                </div>
            </div>
            <div className={modal}>
                <p onClick={closeModal} className="details--close">
                    X
                </p>
                <Details
                    title={title}
                    description={description}
                    rating={rating}
                />
            </div>
        </>
    );
}
