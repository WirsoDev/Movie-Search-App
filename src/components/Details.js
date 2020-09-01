import React from "react";

export default function Details(props) {
    return (
        <div className="details--container">
            <h3 className="details--title">{props.title}</h3>
            <p className="details--overview">{props.description}</p>
            {props.rating > 0 ? (
                <p className="details--rating">{props.rating}</p>
            ) : null}
        </div>
    );
}
