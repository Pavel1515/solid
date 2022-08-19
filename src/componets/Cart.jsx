import "./style.css";
import { createSignal } from "solid-js";
import Vector from '../assets/img/Vector.svg'
import corzina from '../assets/img/corzina.png'
import image2 from '../assets/img/image 2.png'
import image3 from '../assets/img/image 3.png'
import image4 from '../assets/img/image 4.png'
import close from '../assets/img/close.svg'

const Cart = () => {
  const [act, setAct] = createSignal(false);
  const image = [image2, image3 , image4];
  const circle = ["red", "blue", "yellow"];
  const [imageBig,setImageBig] = createSignal(0)
  const [active,setActive] =createSignal(0)
  const [count,setCaount] = createSignal(1)

  return (
    <div className="container">
      <header>
        <img src={Vector} alt="" />
        <h1>Nike Air Force Travis Scott</h1>
        <div className="mini_cart">
          <img src={corzina} alt="" />
          <p>{count()}</p>
        </div>
      </header>
      {act() && (
        <div
          onClick={() => {
            setAct(false);
          }}
          className="close"
        >
          <img src={close} alt="" />
        </div>
      )}
      <div className="container_cart">
        <div className="slider">
          <div className={act() ? "big_img bin" : "big_img"}>
            <img
              onClick={() => {
                setAct(true);
              }}
              className="big "
              src={image[imageBig()]}
              alt=""
            />
          </div>

          <div className={act() ? "mini_slider bin" : "mini_slider"}>
            {image.map((el, index) => (
              <img
                key={index}
                onClick={() => {
                  setImageBig(index);
                  setActive(index);
                }}
                className={active() === index ? "active" : ""}
                src={el}
                alt="img"
              />
            ))}
          </div>
        </div>
        <div className="cart_interfece">
          <h2 className="price">
            12000 <span> ₽</span>
          </h2>
          <div className="color">
            <p>Цвет:</p>
            {circle.map((el, index) => (
              <div
                key={index}
                onClick={() => {
                 setImageBig(index);
              setActive(index);
                }}
                className={el}
              ></div>
            ))}
          </div>
          <div className="bay_container">
            <div className="add_count">
              <div
                onClick={() => {
                  if (count() > 1)  setCaount(count() - 1);
                }}
                className="minus"
              >
                <span>-</span>
              </div>
              <div className="caunt">
                <span>{count()}</span>
              </div>
              <div
                onClick={() => {
                 setCaount(count() + 1);
                }}
                className="plus"
              >
                <span>+</span>
              </div>
            </div>
            <p className="onOne">Купить в 1 клик</p>
            <div className="v_cart">
              <img src={corzina} alt="" />
              <p>В корзину</p>
            </div>
          </div>
          <div className="information">
            <div className="menu_information">
              <div className="menu">Описание</div>
              <div className="menu">Характеристики</div>
              <div className="menu">Отзывы</div>
            </div>
            <div className="inform">
              <ul className="categori_inform">
                <li>Категория</li>
                <li>Производитель</li>
                <li>Бренд</li>
                <li>Гарантия</li>
              </ul>
              <ul className="significance_inform">
                <li>Кросовки</li>
                <li>Производитель</li>
                <li>Nike</li>
                <li>2 года</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;

