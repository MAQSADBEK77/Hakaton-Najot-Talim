import { Link } from "react-router-dom";
import { useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import GreenBtn from "./GreenBtn";
import "../css/Header.css";
function Header() {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {};

  return (
    <div className="header">
      <div className="container">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <Link to="/" className="logo">
              <img src="./public/icons/logo.svg" alt="This is logotip" />
              Toza Makon
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex mr-14">
            <ul className="menu menu-horizontal px-1">
              <li tabIndex={0}>
                <details>
                  <summary className="px-6">Bizning xizmatlar</summary>
                  <ul className="p-2">
                    <li>
                      <a href="/xizmatlar">Uylarni tozalash</a>
                    </li>{" "}
                    <li>
                      <a href="/xizmatlar">Ofislarni tozalash</a>
                    </li>{" "}
                    <li>
                      <a href="/xizmatlar">Bog’larni tozalash</a>
                    </li>{" "}
                    <li>
                      <a href="/xizmatlar">Yashil maydonlarni tozalash</a>
                    </li>{" "}
                    <li>
                      <a href="/xizmatlar">Qurilish joylarini tozalash</a>
                    </li>{" "}
                    <li>
                      <a href="/xizmatlar">Umumiy tozalash</a>
                    </li>{" "}
                    <li>
                      <a href="/xizmatlar">Mebellarni tozalash</a>
                    </li>
                    <li>
                      <a href="/xizmatlar">Mebellarni tozalash</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/bizhaqimizda">Biz haqimizda</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-6">
            {" "}
            <label className="swap swap-rotate badge-ghost w-[48px] h-[48px] rounded-xl">
              <input type="checkbox" onClick={handleTheme} />
              <BsMoonFill className="swap-on h-6 w-6" />
              <BsSunFill className="swap-off h-6 w-6" />
            </label>
            <div className=" w-[48px] h-[48px] dropdown dropdown-hover">
              <label tabIndex={0} className="btn  rounded-xl">
                UZ
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/">Uzbek</Link>
                </li>{" "}
                <li>
                  <Link to="/">Russian</Link>
                </li>
                <li>
                  <Link to="/">English</Link>
                </li>
              </ul>
            </div>
            <GreenBtn title="Ilovamizni sinab ko’ring" to="/ilova" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
