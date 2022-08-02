/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";
import {configSync} from "config";
import {movies} from "../utils/constants.ts";
interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number,
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const handler: Handlers = {
   GET(_req, ctx) {
    const key = Deno.env.get("TMDB_ACCESS_TOKEN") ?? configSync().TMDB_ACCESS_TOKEN;
    // const rawMovies = new Promise(()=> {"r":"0"});
    // const rawMovies = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     'Authorization': 'Bearer ' + key
    //   }
    // })
    // const movies: any = await rawMovies.json();
    
    return ctx.render();
  },
};
const SideBarLayout = (props: { children: any }) => {
  return (
    <div class={tw`flex flex-col md:flex-row mx-auto md:py-3`}>
      <div
        class={tw`w-full mb-3 md:mb-0 md:w-auto md:min-h-screen shadow-2xl`}
      >
        <input class={tw`bg-transparent w-full border-black rounded-md border-2 py-2 mt-6`} placeholder="Search..."/>
        <div class={tw`hidden md:block p-3 flex items-center justify-center`}>
          <p class={tw`text-xl text-center w-full h-[100px]`}>
            Saved
          </p>
        </div>
      </div>
      <div class={tw`grow px-3`}>
        {props.children}
      </div>
    </div>
  );
};
const MovieTopics = ["Home","Action", "Drama", "Comedy", "Horror"];

export default function Home(props: PageProps) {
  // const { data: {movies} }:any = props;
  // console.log({movies});
  
  return (
    <div class={tw`bg-white h-full w-full p-6`}>
      <Header />
      <SideBarLayout>
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
        <p class={tw`block md:hidden`}>{'>'}</p>
        </div>
        <div class={tw`grid grid-cols-2 md:grid-cols-5 gap-6`}>
            {
              (movies as Movie[]).map((movie) => (
                <div className={tw`p-6 rounded-md bg-gray-400`} key={movie.id}>{movie.title}</div>
              ))
            }
            <div className={tw`p-6 rounded-md bg-gray-400`}>Hunger Games</div>
            <div className={tw`p-6 rounded-md bg-gray-400`}>Fast and Furious</div>
            <div className={tw`p-6 rounded-md bg-gray-400`}>Rambo</div>
            <div className={tw`p-6 rounded-md bg-gray-400`}>Taken</div>
            <div className={tw`p-6 rounded-md bg-gray-400`}>Avengers</div>
        </div>
      </SideBarLayout>
    </div>
  );
}
