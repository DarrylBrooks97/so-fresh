/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { movies } from "../../utils/constants.ts";
import { tw } from "@twind";

export const handler: Handlers = {
  GET(_, ctx) {
    const { id } = ctx.params;
    const movie = movies.find((m: any) => m.id == id);

    return ctx.render(movie);
  },
};
const formatNumber = (value: number) => {
  let newValue: any = value;

  if (value >= 1000) {
    const suffixes = ["", "k", "m", "b", "t"];
    const suffixNum = Math.floor(("" + value).length / 3);
    let shortValue: any = "";
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value)
          .toPrecision(precision),
      );
      const dotLessShortValue = (shortValue + "").replace(
        /[^a-zA-Z 0-9]+/g,
        "",
      );
      if (dotLessShortValue.length <= 2) break;
    }
    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
};
export default function Movie(props: PageProps) {
  const movie = props.data;

  return (
    <div
      className={tw
        `w-screen h-screen p-6 flex justify-center items-center bg-black`}
    >
      <div className="">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          class={tw`w-full h-full`}
          alt={movie.title}
        />
        <div className={tw``}>
          <p className={tw`text-white text-center text-4xl py-5`}>
            {movie.title}
            <span className={tw`text-yellow-200 ml-2 text-sm`}>
              {formatNumber(movie.popularity)}
            </span>
          </p>
        </div>
        <p className={tw`text-white text-xl text-left`}>
          Release Date: <span>{movie.release_date}</span>
        </p>
        <p className={tw`text-white text-xl text-left`}>
          Language: <span>{movie.original_language}</span>
        </p>
        <p className={tw`text-white text-xl text-center`}>Overview:</p>
        <p className={tw`text-white text-xl text-center`}>{movie.overview}</p>
      </div>
    </div>
  );
}
