import Modal from "react-modal";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "../CartModal/cartModal.css";

const CartModal = ({ isOpen, onRequestClose }) => {
  const { cart, totalQuantity, total, removeItemFromCart, updateCartItem} = useContext(CartContext);

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
          transform: "none", // Remove centering
          zIndex: 9999,
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 9999,
        },
      }}
    >
      {}

      <div>
          <div className="cartmodalContainer">
            {totalQuantity() === 0 ? (
        <div>
          <h3>No se han añadido productos</h3>
        </div>
      ) : (
        cart.map((i) => (
          <CartItem key={i.name} {...i} onRemove={removeItemFromCart} onUpdateCartItem={updateCartItem}/>
        ))
        
      )}

          </div>

          <div className="cartModalFooter">
            <p>Cantidad total: {totalQuantity()}</p>
            <p>Total a pagar: ${total()}</p>

            <button onClick={onRequestClose}>Seguir comprando</button>
            <Link to="/cart">Ver compra</Link>
          </div>
        </div>
    </Modal>
  );
};

export default CartModal;
