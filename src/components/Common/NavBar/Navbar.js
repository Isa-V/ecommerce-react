import { useState } from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../NavBar/Assets/logo.svg";

const NavBar = () => {
  const [burgerClass, setBurgerClass] = useState("burgerBar unclicked");
  const [menuClass, setMenuClass] = useState ('navMenu menuHidden');
  const [isMenuClicked, setInMenuClicked] = useState (false);

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass('burgerBar clicked');
      setMenuClass('navMenu menuVisible');
    }else{
      setBurgerClass('burgerBar unclicked');
      setMenuClass('navMenu menuHidden');
    }
    setInMenuClicked(!isMenuClicked);
  }

  return (
    <nav>
      <div className="navContainer">
        <div className="navBurgerButton"  onClick={updateMenu}>
          <div className={burgerClass}> </div>
          <div className={burgerClass}> </div>
          <div className={burgerClass}> </div>
        </div>

        <div className="navLogo">
          <img src={logo} alt="logo" />
        </div>

        <div className="navButtons">
          <Link to='/' className="navButton">Home</Link>
          <Link to='/category/panaderia' className="navButton">Panadería</Link>
          <Link to='/category/pasteleria' className="navButton">Pastelería</Link>
          <Link to='/category/cafeteria' className="navButton">Cafetería</Link>
          <Link to='/category/jugos' className="navButton">Jugos</Link>
        </div>

        <div>
          <CartWidget/>
        </div>
      </div>

      <div className={menuClass}>
        <div className="navMenuButtonsContainer">
        <Link to='/' className="navButton">Home</Link>
          <Link to='/category/panaderia' className="navButton">Panadería</Link>
          <Link to='/category/pasteleria' className="navButton">Pastelería</Link>
          <Link to='/category/cafeteria' className="navButton">Cafetería</Link>
          <Link to='/category/jugos' className="navButton">Jugos</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
