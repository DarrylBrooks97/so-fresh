/** @jsx h */
import { tw } from "twind";
import { ComponentChildren, h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Content from "../islands/Content.tsx";
import Header from "../islands/Header.tsx";

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

const RootLayout = ({ children }: { children: ComponentChildren }) => {
  return (
    <div>
      <head>
        <title>Home</title>
      </head>
      <div class={tw`w-full`}>
        <Header />
        <div class={tw`px-3`}>
          {children}
        </div>
      </div>
    </div>
  );
};
export default function Home(props: PageProps) {
  return (
    <RootLayout>
      <Content />
    </RootLayout>
  );
}
