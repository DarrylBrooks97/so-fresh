/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const LayoutContent = (props: { filter?: (e: any) => void; children: any }) => {
  return (
    <div class={tw`flex flex-col md:flex-row mx-auto md:py-3`}>
      <div
        class={tw`w-full mb-3 md:mb-0 md:w-auto md:min-h-screen shadow-2xl`}
      >
        <input
          class={tw
            `bg-transparent w-full border-black rounded-md border-2 py-2 mt-6`}
          placeholder="Search..."
          onChange={props.filter}
        />
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

export default LayoutContent;
