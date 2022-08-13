import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "warn",
};
if (IS_BROWSER) setup(config);
