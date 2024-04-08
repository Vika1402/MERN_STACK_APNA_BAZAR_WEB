import "./Header.scss";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";

import { Context } from "../../utils/context";
const Header = () => {
  const {cartCount}=useContext(Context);
  const [showSearch,setShowSearch]=useState(false);
  const [scrolled, setScroll] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navigate=useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <div className="center">Apna-Bazar</div>
          <ul className="left">
            <li onClick={()=>navigate("/")}>Home</li>
            <li>About</li>
            <li>Category</li>
            <li>Contact</li>
          </ul>

          <div className="right">
            <IoSearch onClick={() => setShowSearch(true)}/>
            <FaRegHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <FaShoppingCart />
             {!!cartCount&& <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
     { showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
