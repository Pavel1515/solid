import Header from "../Header";
import { Link } from "@gh0st-work/solid-js-router";

const Home = ({ count }) => {
  return (
    <>
      <div class=" xl:max-w-screen-xl   min-h-full overflow-y-hidden box-border overflow-x-hidden w-4/5 mx-auto">
        <Header count={count} />
        <div class=" min-h-screen w-full flex items-center justify-center">
          <div>
            <div class=" text-center text-rose-900">Магазин кросовкок :</div>
            <div class="flex flex-col">
              <Link
                href={"/cart"}
                class="my-2 border text-center border-black h-10 p-2  text-rose-900 font-black hover:bg-orange-500 rounded transition-all"
              >
                Карточка товара
              </Link>
              <Link
                href={"/contact"}
                class=" border text-center border-black h-10 p-2  text-rose-900 font-black hover:bg-orange-500 rounded transition-all"
              >
                Контакты
              </Link>
              <Link
                href={"/revies"}
                class="my-2 border text-center border-black h-10 p-2  text-rose-900 font-black hover:bg-orange-500 rounded transition-all"
              >
                Отзывы
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
