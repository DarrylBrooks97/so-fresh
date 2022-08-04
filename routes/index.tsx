/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import { movies } from "../utils/constants.ts";
import Header from "../islands/Header.tsx";
import MovieList from "../islands/MovieList.tsx";
import Content from "../islands/Content.tsx";
// import LayoutContent from "../islands/LayoutContent.tsx";
import { Movie } from "../types.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    // const key = Deno.env.get("TMDB_ACCESS_TOKEN") ?? configSync().TMDB_ACCESS_TOKEN;
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
// const MovieTopics = ["Home", "Action", "Drama", "Comedy", "Horror"];

// const Layout = (props: {movies: Movie[], setFilteredMovies: (t: any)=> void}) => {
//   return (
//     <div class={tw`flex flex-col md:flex-row mx-auto md:py-3`}>
//       <div
//         class={tw`w-full mb-3 md:mb-0 md:w-auto md:min-h-screen shadow-2xl`}
//       >
//         <Input movies={props.movies} setFilteredMovies={props.setFilteredMovies} />
//         <div class={tw`hidden md:block p-3 flex items-center justify-center`}>
//           <p class={tw`text-xl text-center w-full h-[100px]`}>
//             Saved
//           </p>
//         </div>
//       </div>
//       <div class={tw`grow md:px-3`}>
//         {props.children}
//       </div>
//     </div>
//   );
// };

export default function Home(props: PageProps) {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

  // const { data: {movies} }:any = props;
  // console.log({movies});

  return (
    <div class={tw`bg-white h-full w-full p-6`}>
      <Header />
      <Content />
    </div>
  );
}
