import React, { useState, useEffect } from "react";
import Cards from "../card/Cards";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const [page, setPage] = useState(1);

  useEffect(
    () => {
      getData();
    },
    [type],
    1500
  );

  const getData = () => {
    // setPage(1);
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  useEffect(() => {
    morepicture();
  }, [type]);

  const morepicture = () => {
    setPage(page + 1);
    const newURL = `https://api.themoviedb.org/3/movie/${
      type ? type : "popular"
    }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}`;
    fetch(newURL)
      .then((response) => response.json())
      .then((data) => {
        //here I'm assuming the returned data is an array of movies

        if (page > 1) {
          setMovieList((prevData) => [...prevData, ...data.results]);
        } else {
          setMovieList(data.results);
        }
      });
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
      <div className="morepicture">
        <button onClick={morepicture}>Load more</button>
      </div>
    </div>
  );
};

export default MovieList;

