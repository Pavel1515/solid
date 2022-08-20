import { Link } from "@gh0st-work/solid-js-router";
import { createSignal } from "solid-js";

const Home = () => {
  return (
    <div class="bg-gray-400 min-h-screen w-full flex items-center justify-center">
      <div>
        <div class="text-rose-900">Магазин кросовкок :</div>
        <Link href={"/cart"} class="text-rose-900 font-black">
          {" "}
          Карточка товара
        </Link>
      </div>
    </div>
  );
};
export default Home;
