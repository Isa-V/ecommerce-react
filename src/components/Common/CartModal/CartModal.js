import Modal from "react-modal";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "../CartModal/cartModal.css";
import cartIcon from "../CartModal/Assets/cart.svg";

const CartModal = ({ isOpen, onRequestClose }) => {
  const { cart, totalQuantity, total, removeItemFromCart, updateCartItem } =
    useContext(CartContext);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      style={{
        content: {
          top: 71,
          left: "auto",
          right: 0,
          bottom: "auto",
          transform: "none",
          zIndex: 9999,
          backgroundColor: "#19191c",
          border: "none",
          maxWidth: "80%", 
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 9999,
        },
      }}
    >
      <div className="cartmodalContainer">
        <div >
          {totalQuantity() === 0 ? (
            <div>
              <h3>No se han añadido productos</h3>
            </div>
          ) : (
            cart.map((i) => (
              <CartItem
                key={i.name}
                {...i}
                onRemove={removeItemFromCart}
                onUpdateCartItem={updateCartItem}
              />
            ))
          )}
        </div>

        <div className="cartModalFooter">
          <p>Cantidad total: {totalQuantity()}</p>
          <p>Total a pagar: ${total()}</p>

          <div className="cartModalFooterButtons">
            <button className="cartModalButtons" onClick={onRequestClose}>
              Seguir comprando
            </button>
            <Link className="cartModalButtons" to="/cart">
              <img src={cartIcon} alt="cart" />
              Ver compra
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
