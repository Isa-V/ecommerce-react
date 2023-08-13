import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../NavBar/NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../NavBar/Assets/logo.svg";
import CartModal from "../CartModal/CartModal";
import Modal from "react-modal";

const NavBar = () => {
  // Verificar la ubicación actual y decidir qué elementos mostrar u ocultar
  const location = useLocation();

  const shouldHideCart =
    location.pathname === "/cart" ||
    location.pathname === "/checkout" ||
    location.pathname === "/order-summary";

  const [burgerClass, setBurgerClass] = useState("burgerBar unclicked");
  const [menuClass, setMenuClass] = useState("navMenu menuHidden");
  const [isMenuClicked, setInMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burgerBar clicked");
      setMenuClass("navMenu menuVisible");
    } else {
      setBurgerClass("burgerBar unclicked");
      setMenuClass("navMenu menuHidden");
    }
    setInMenuClicked(!isMenuClicked);
  };

  //modal
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <nav>
      <div className="navContainer">
        <div className="navBurgerButton" onClick={updateMenu}>
          <div className={burgerClass}> </div>
          <div className={burgerClass}> </div>
          <div className={burgerClass}> </div>
        </div>

        <div className="navLogo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {!shouldHideCart ? (
        <div className="navContentContainer">
          <div className="navButtons">
            <Link to="/" className="navButton">
              Home
            </Link>
            {/* Las siguientes rutas de categorías solo se mostrarán cuando shouldHideCart sea falso */}
            <Link to="/category/panaderia" className="navButton">
              Panadería
            </Link>
            <Link to="/category/pasteleria" className="navButton">
              Pastelería
            </Link>
            <Link to="/category/cafeteria" className="navButton">
              Cafetería
            </Link>
            <Link to="/category/jugos" className="navButton">
              Jugos
            </Link>
          </div>

          <div onMouseEnter={openModal} onMouseLeave={closeModal}>
            <CartWidget />
            <CartModal isOpen={modalIsOpen} onRequestClose={closeModal} />
          </div>
        </div>
      ) : (
        <Link className="navButton" to="/">Seguir comprando</Link>
      )}
    </div>

      <div className={menuClass}>
        <div className="navMenuButtonsContainer">
          <Link to="/" className="navButton">
            Home
          </Link>
          <Link to="/category/panaderia" className="navButton">
            Panadería
          </Link>
          <Link to="/category/pasteleria" className="navButton">
            Pastelería
          </Link>
          <Link to="/category/cafeteria" className="navButton">
            Cafetería
          </Link>
          <Link to="/category/jugos" className="navButton">
            Jugos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
