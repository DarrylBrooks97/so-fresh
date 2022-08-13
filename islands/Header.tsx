/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Header() {
  return (
    <div
      class={tw
        `p-3 sticky top-0 mx-auto bg items-center z-90 backdrop-blur-sm bg-white`}
    >
      <div
        class={tw(`w-max cursor-pointer`)}
        onClick={() => window.location.href = ""}
      >
        <p
          class={tw
            `text-3xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent`}
        >
          So-Fresh
        </p>
      </div>
    </div>
  );
}
