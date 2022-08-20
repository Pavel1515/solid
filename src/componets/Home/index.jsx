import { Link } from "@gh0st-work/solid-js-router";
import { createSignal } from "solid-js";

const Home = () => {
  return (
    <div class="bg-gray-400 min-h-screen w-full flex items-center justify-center">
      <div>
        <div class="mb-3 text-center text-rose-900">Магазин кросовкок :</div>
        <Link href={"/cart"} class="border text-center border-black h-10 p-2  text-rose-900 font-black hover:bg-orange-500 rounded transition-all">
          {" "}
          Карточка товара
        </Link>
      </div>
    </div>
  );
};
export default Home;
