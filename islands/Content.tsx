/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { movies } from "../utils/constants.ts";
import { Movie } from "../types.ts";
import MovieList from "../islands/MovieList.tsx";

const MovieTopics = ["Home", "Action", "Drama", "Comedy", "Horror"];

const Content = () => {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

  const filter = (e: any) => {
    const value = e.currentTarget.value;
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(filtered);
    console.log({ filtered });
  };

  return (
    <div class={tw`flex flex-col md:flex-row mx-auto md:py-3`}>
      <div
        class={tw`w-full mb-3 md:mb-0 md:w-auto md:min-h-screen shadow-2xl`}
      >
        <input
          class={tw
            `bg-transparent w-full border-black rounded-md border-2 py-2 mt-6`}
          placeholder="Search..."
          onChange={filter}
        />
        <div class={tw`hidden md:block p-3 flex items-center justify-center`}>
          <p class={tw`text-xl text-center w-full h-[100px]`}>
            Saved
          </p>
        </div>
      </div>
      <div class={tw`flex`}>
        <div class={tw`flex md:justify-start pb-3 overflow-x-scroll`}>
          {MovieTopics.map((topic) => (
            <div class={tw`pr-3`}>
              <p class={tw`text-xl cursor-pointer`}>
                {topic}
              </p>
            </div>
          ))}
        </div>
        <p class={tw`block md:hidden`}>{">"}</p>
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Content;
