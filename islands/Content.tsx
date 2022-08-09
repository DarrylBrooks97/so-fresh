/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { movies } from "../utils/constants.ts";
import { Movie } from "../types.ts";
import SideBar from "./SiderBar.tsx";
import MovieList from "../islands/MovieList.tsx";


const Content = () => {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

  const filter = (e: any) => {
    const value = e.currentTarget.value;
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div class={tw`flex flex-col md:flex-row md:py-3`}>
      <SideBar filter={filter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Content;
