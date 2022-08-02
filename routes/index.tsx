/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";

export const handler: Handlers = {
  GET(_req, ctx) {
    return ctx.render();
  },
};
const SideBarLayout = (props: { children: any }) => {
  return (
    <div class={tw`flex max-w-7xl mx-auto py-3`}>
      <div
        class={tw`w-max min-h-screen flex flex-col shadow-xl shadow-red-200`}
      >
        <input class={tw`bg-transparent border-white border-2 text-white`} />
        <div class={tw`p-3 flex items-center justify-center`}>
          <p class={tw`text-xl text-white text-center w-full h-[100px]`}>
            Saved
          </p>
        </div>
      </div>
      <div class={tw`grow`}>
        {props.children}
      </div>
    </div>
  );
};
const MovieTopics = ["Action", "Drama", "Comedy", "Horror"];
export default function Home() {
  return (
    <div class={tw`bg-black h-full w-full p-6`}>
      <Header />
      <SideBarLayout>
        <div class={tw`flex pl-3 justify-center`}>
          {MovieTopics.map((topic) => (
            <div class={tw`pl-3`}>
              <p class={tw`text-xl text-white cursor-pointer`}>
                {topic}
              </p>
            </div>
          ))}
        </div>
      </SideBarLayout>
    </div>
  );
}
