import "./style.css";
import { createSignal, For } from "solid-js";
import Vector from "../assets/img/Vector.svg";
import corzina from "../assets/img/corzina.png";
import image2 from "../assets/img/image 2.png";
import image3 from "../assets/img/image 3.png";
import image4 from "../assets/img/image 4.png";
import close from "../assets/img/close.svg";

const Cart = () => {
  const [act, setAct] = createSignal(false);
  const image = [image2, image3, image4];
  const circle = ["bg-red-600", "bg-sky-900", "bg-yellow-400"];
  const [imageBig, setImageBig] = createSignal(0);
  const [active, setActive] = createSignal(0);
  const [count, setCaount] = createSignal(1);

  return (
    <div class="container mx-auto py-5 px-4">
      <header class="flex justify-between items-center border-b border-black">
        <img src={Vector} alt="" />
        <h1>Nike Air Force Travis Scott</h1>
        <div class="flex justify-between items-center ">
          <img src={corzina} alt="" />
          <p class="text-amber-500  my-5">{count()}</p>
        </div>
      </header>
      {act() && (
        <div
          onClick={() => {
            setAct(false);
          }}
          class="z-10 absolute bg-white right-1 top-15"
        >
          <img class="z-10 w-20  h-20 cursor-pointer" src={close} alt="" />
        </div>
      )}
      <div class="flex">
        <div class="w-6/12">
          <div
            class={
              act()
                ? "flex items-center justify-center w-full absolute h-3/5 bg-slate-300"
                : ""
            }
          >
            <img
              onClick={() => {
                setAct(true);
              }}
              class={act() ? "w-72 h-72" : "mx-10 w-120 h-120"}
              src={image[imageBig()]}
              alt=""
            />
          </div>

          <div class="flex mx-16 ">
            <For each={image}>
              {(el, index) => (
                <img
                  key={index()}
                  src={el}
                  class={
                    active() === index()
                      ? "w-20 h-20 border rounded-md border-black "
                      : "cursor-pointer w-20 h-20"
                  }
                  onClick={() => {
                    setImageBig(index());
                    setActive(index());
                  }}
                  alt="img"
                />
              )}
            </For>
          </div>
        </div>
        <div class="w-6/12">
          <h2 class="border-8 mx-auto w-3/6 my-10 text-rose-600 text-2xl flex justify-center  items-center h-20   border-cyan-600">
            12000 <span class="mx-2 text-xl text-emerald-600  "> ₽</span>
          </h2>
          <div class="my-10  flex justify-center items-center">
            <p>Цвет:</p>

<For each={circle}>
  {(el,index)=>(
    <div
    key={index()}
    class={
      "w-6  mx-1  rounded-3xl cursor-pointer h-6 " + `${el}`}
      onClick={() => {
        setImageBig(index());
        setActive(index());}}
    >

    </div>
  )}
</For>






 
          </div>
          <div class=" flex items-center justify-evenly">
            <div class="flex">
              <div
                onClick={() => {
                  if (count() > 1) setCaount(count() - 1);
                }}
                class="w-8 cursor-pointer font-extrabold flex justify-center items-center rounded-l-lg border border-black h-9"
              >
                <span class="text-red-700">-</span>
              </div>
              <div class="text-amber-700  w-8 flex justify-center items-center border border-black h-9">
                <span>{count()}</span>
              </div>
              <div
                onClick={() => {
                  setCaount(count() + 1);
                }}
                class="w-8  cursor-pointer  font-extrabold text-green-500 flex justify-center items-center rounded-r-lg border border-black h-9"
              >
                <span>+</span>
              </div>
            </div>
            <p class="w-56 py-1  h-9 text-center   border  border-black rounded-2xl bg-amber-600 cursor-pointer">
              Купить в 1 клик
            </p>
            <div class="flex w-36 h-9  items-center  border  border-black rounded-2xl bg-amber-600 cursor-pointer ">
              <img src={corzina} class="mx-3 w-4 h-4" alt="" />
              <p class="mx-3">В корзину</p>
            </div>
          </div>
          <div class="my-6 h-9 flex justify-evenly">
            <div class="cursor-pointer hover:border-b  border-black">
              Описание
            </div>
            <div class="cursor-pointer hover:border-b  border-black">
              Характеристики
            </div>
            <div class="cursor-pointer hover:border-b  border-black">
              Отзывы
            </div>
          </div>
          <div class="my-14 flex justify-evenly">
            <ul>
              <li>Категория</li>
              <li>Производитель</li>
              <li>Бренд</li>
              <li>Гарантия</li>
            </ul>
            <ul>
              <li>Кросовки</li>
              <li>Производитель</li>
              <li>Nike</li>
              <li>2 года</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
