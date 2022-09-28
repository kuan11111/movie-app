import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/">
          <img
            className="nav-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          />
        </Link>
        <Link to="/movies/popular">
          <span>Popular</span>{" "}
        </Link>
        <Link to="/movies/top_rated">
          <span>Top Rated</span>{" "}
        </Link>
        <Link to="/movies/upcoming">
          <span>Upcoming</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

