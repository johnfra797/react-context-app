import React from "react";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import {UserProvider} from "./context/UserContext";
import {MoviesProvider} from "./context/MoviesContext";

function App() {
  return (
    <div>
      <UserProvider>
        <MoviesProvider>
          <Navbar></Navbar>
          <MovieList></MovieList>
        </MoviesProvider>
      </UserProvider>
    </div>
  );
}

export default App;
