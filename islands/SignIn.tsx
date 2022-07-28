/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function SignIn() {
  return (
    <button
      class={tw`bg-gray-100 w-6/12 py-2 rounded-md`}
      type="submit"
      disabled={!IS_BROWSER}
    >
      <p>Sign in with Twitter</p>
    </button>
  );
}
