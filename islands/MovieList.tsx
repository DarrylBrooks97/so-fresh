/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Movie } from "../types.ts";

const MovieList = (props: { movies: Movie[] }) => {
  const { movies } = props;

  return (
    <div
      class={tw
        `grid grid-cols-2 max md:grid-cols-4 md:h-full gap-6 w-full md:pl-3`}
    >
      {movies.map((movie) => (
        <div
          class={tw`py-6 text-center rounded-md overflow-hidden`}
          key={movie.id}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
            class={tw`w-full h-full `}
          />
          {movie.title}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
