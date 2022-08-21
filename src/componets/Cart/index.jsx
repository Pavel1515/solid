import "./style.css";
import { createMemo, createSignal, For } from "solid-js";
import corzina from "../../assets/img/corzina.png";
import image2 from "../../assets/img/image 2.png";
import image3 from "../../assets/img/image 3.png";
import image4 from "../../assets/img/image 4.png";
import close from "../../assets/img/close.svg";
import axios from "axios";
import Header from "../Header";

const Cart = () => {
  const [act, setAct] = createSignal(false);
  const image = [image2, image3, image4];
  const circle = ["bg-red-600", "bg-sky-900", "bg-yellow-400"];
  const [imageBig, setImageBig] = createSignal(0);
  const [active, setActive] = createSignal(0);
  const [count, setCaount] = createSignal(1);
  const [response, setResponse] = createSignal({});

  const fetchImageBigMemo = createMemo(async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${imageBig() + 1}`
    );
    // При первом рендере а также при изменени  индекса imageBig ,будет происходить гет запрос
    setResponse(res.data);
  });
  const nextImg = () => {
    if (imageBig() < 2) {
      setImageBig(active() + 1);
      setActive(active() + 1);
    }
  };
  const prevImg = () => {
    if (active() > 0) {
      setImageBig(active() - 1);
      setActive(active() - 1);
    }
  };

  return (
    <div class=" xl:max-w-screen-xl   min-h-full overflow-y-hidden box-border overflow-x-hidden w-4/5 mx-auto">
      <Header count={count()} />
      {act() && (
        <div
          onClick={() => {
            setAct(false);
          }}
          class="absolute top-0 right-0 cursor-pointer z-10"
        >
          <img class="z-10 w-20  h-20 cursor-pointer" src={close} alt="" />
        </div>
      )}
      <div class="lg:flex ">
        <div class=" w-full lg:w-6/12 h-full">
          <div
            class={
              act()
                ? "flex items-center inset-0 justify-center w-full absolute h-full bg-slate-300"
                : " mx-auto h-2/4 w-3/4 lg:h-3/4 "
            }
          >
            <img
              onClick={() => {
                setAct(true);
              }}
              class={
                act() ? "w-2/4 h-2/4" : "mx-auto h-2/4 w-3/4 lg:h-3/4 w-3/4"
              }
              src={image[imageBig()]}
              alt=""
            />
          </div>

          <div class="flex justify-center lg:mx-16 ">
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
          <br />
          <div class="mx-auto text-center">
            <p class="text-red-800">Пользуемся get запросом и createMemo:</p>
            <p>
              Id запроса: <span class="text-cyan-800">{response().id}</span>
            </p>
            <p>
              Title запроса:{" "}
              <span class="text-cyan-800">{response().title}</span>
            </p>
          </div>
          <div class="flex items-center justify-center sm:my-5">
            <button
              class="text-cyan-800 border border-current rounded-lg w-36 h-12 hover:bg-amber-600 transition-all"
              onClick={prevImg}
            >
              преведущая
            </button>
            <button
              class="text-cyan-800 border border-current rounded-lg mx-3 w-36 h-12 hover:bg-amber-600 transition-all"
              onClick={nextImg}
            >
              следующая
            </button>
          </div>
        </div>
        <div class=" lg:w-6/12">
          <h2 class="border-8 mx-auto w-3/6 my-10 text-rose-600 text-2xl flex justify-center  items-center h-20   border-cyan-600">
            12000 <span class="mx-2 text-xl text-emerald-600  "> ₽</span>
          </h2>
          <div class="my-10  flex justify-center items-center">
            <p>Цвет:</p>

            <For each={circle}>
              {(el, index) => (
                <div
                  key={index()}
                  class={"w-6  mx-1  rounded-3xl cursor-pointer h-6 " + `${el}`}
                  onClick={() => {
                    setImageBig(index());
                    setActive(index());
                  }}
                ></div>
              )}
            </For>
          </div>

          <div class="md:flex items-center justify-evenly">
            <div class="flex justify-center">
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
            <p class="mx-auto m-4 sm:pt-1 w-40 text-center h-9 border  border-black rounded-2xl bg-amber-600 cursor-pointer ">
              Купить в 1 клик
            </p>
            <div class="mx-auto md:mx-0  flex w-36 h-9 items-center items-centerborder border border-black rounded-2xl bg-amber-600 cursor-pointer   ">
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
