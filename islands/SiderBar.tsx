/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const MovieTopics = ["Home", "Action", "Drama", "Comedy", "Horror"];

const SideBar = ({filter}: {filter: (t:any)=> void}) => {
    return (
      <div
        class={tw`px-6 mb-3 md:mb-0 md:w-auto md:min-h-screen md:border-r-2 md:border-slate-200`}
      >
        <input
          class={tw
            `bg-transparent w-full border-slate-400 rounded-md border-2 py-2 px-3 mt-6`}
          placeholder="Search..."
          onInput={filter}
        />
        <div class={tw`flex md:flex-col text-center justify-evenly w-full pb-3`}>
          {MovieTopics.map((topic) => (
            <div class={tw`pt-3 pr-2`}>
              <p class={tw`text-xl cursor-pointer border-b-1 hover:border-pink-300`}>
                {topic}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
}

export default SideBar;