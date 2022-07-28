/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import SignIn from "../islands/SignIn.tsx";
import { configSync } from "config";
import { Handlers, PageProps } from "$fresh/server.ts";
import {
  getAuthenticateLink,
} from "https://deno.land/x/twitter_oauth_1_0a@1.0.7/mod.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const { TWIITER_API_KEY, TWIITER_API_KEY_SECRET } = configSync({
      safe: true,
    });

    const authParam = {
      oauthConsumerKey: TWIITER_API_KEY,
      oauthConsumerSecret: TWIITER_API_KEY_SECRET,
      oauthCallback: "http://localhost:3000/oauth/callback",
    };

    const urlResponse = await getAuthenticateLink(authParam);

    return ctx.render({ resp: urlResponse });
  },
};

export default function Home({ data }: PageProps) {
  console.log({ data });

  return (
    <div
      class={tw
        `p-4 flex justify-center items-center mx-auto bg-black h-[100vh] max-w-screen`}
    >
      <div class={tw`flex flex-col text-center items-center`}>
        <img src="/favicon.ico" alt="disc" class={tw`w-[100px] h-[100px]`} />
        <h1
          class={tw
            `bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text text-4xl`}
        >
          Unsolicited Rewind
        </h1>
        <h2 class={tw`text-gray-400 text-2xl py-6`}>
          Post all of your vibes here on all platforms
        </h2>
        <form method="post" class={tw`w-full h-full`}>
          <SignIn />
        </form>
      </div>
    </div>
  );
}
