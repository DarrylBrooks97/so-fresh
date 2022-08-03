/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Movie } from "../types.ts";

const Input = (
  props: { movies: Movie[]; setFilteredMovies: (t: any) => void },
) => {
  const { movies, setFilteredMovies } = props;
  const filter = (e: any) => {
    const value = e.value;
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(filtered);
    console.log({ filtered });
  };
  return (
    <input
      class={tw
        `bg-transparent w-full border-black rounded-md border-2 py-2 mt-6`}
      placeholder="Search..."
      onChange={filter}
    />
  );
};

export default Input;
