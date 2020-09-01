import React from "react";
import Moviesearch from "./components/Moviesearch";
import "./style/main.css";
import "./style/moviecard.css";
import "./style/details.css";
import "./style/responsive.css";

export default function App() {
    return (
        <div className="app">
            <Moviesearch />
        </div>
    );
}
