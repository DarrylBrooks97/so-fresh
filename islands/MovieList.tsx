/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Movie } from "../types.ts";

const MovieList = (props: { movies: Movie[] }) => {
  const { movies } = props;

  return (
    <div class={tw`grid grid-cols-2 md:grid-cols-5 gap-6`}>
      {movies.map((movie) => (
        <div
          className={tw
            `p-6 rounded-md bg-gray-400 bg-[url('https://image.tmdb.org/t/p/w200/${movie.backdrop_path}')]`}
          key={movie.id}
        >
          {movie.title}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
