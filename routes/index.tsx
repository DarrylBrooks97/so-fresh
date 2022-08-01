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
    <div class={tw`flex`}>
      <div
        class={tw
          `w-max min-h-screen flex flex-col shadow-white shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)]`}
      >
        <input class={tw`bg-transparent border-white border-2 text-white`} />
        <div class={tw`p-3 flex items-center justify-center`}>
          <p class={tw`text-xl text-white`}>
            Saved
          </p>
        </div>
      </div>
      <div class={tw`p-3 grow w-full`}>
        {props.children}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div class={tw`bg-black min-h-screen min-w-screen p-6`}>
      <Header />
      <SideBarLayout>
        <p class={tw`text-white`}>Hello World</p>
      </SideBarLayout>
    </div>
  );
}
