import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/header/Nav";
import Homepage from "./Components/pages/homepage/Homepage";
import MovieList from "./Components/movieList/MovieList";
import MovieDetail from "./Components/pages/movieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="movie/:id" element={<MovieDetail />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

