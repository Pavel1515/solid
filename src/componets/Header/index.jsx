import Vector from "../../assets/img/Vector.svg";
import { Link } from "@gh0st-work/solid-js-router";
import corzina from "../../assets/img/corzina.png";

const Header = (props) => {
  return (
    <header class="flex justify-between items-center border-b border-black">
      <Link href={"/"}>
        <img src={Vector} alt="" />
      </Link>
      <h1>Nike Air Force Travis Scott</h1>
      <div class="flex justify-between items-center ">
        <img src={corzina} alt="" />
        <p class="text-amber-500  my-5">{props.count ? props.count : 0}</p>
      </div>
    </header>
  );
};
export default Header;
