/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import SignIn from '../islands/SignIn.tsx'

export default function Home() {

  return (
    <div class={tw`p-4 flex justify-center items-center mx-auto bg-black h-[100vh] max-w-screen`}>
      <div class={tw`flex flex-col text-center items-center`}>
        <img src="/favicon.ico" alt="disc" class={tw`w-[100px] h-[100px]`}/>
        <h1 class={tw`bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text text-4xl`}>Unsolicited Rewind</h1>
        <h2 class={tw`text-gray-400 text-2xl py-6`}>Post all of your vibes here on all platforms</h2>
        <SignIn/>
      </div>
    </div>
  );
}
