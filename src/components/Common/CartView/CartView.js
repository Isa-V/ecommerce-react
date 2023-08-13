import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "../CartView/CartView.css";

const CartView = () => {
  const {
    cart,
    clearCart,
    totalQuantity,
    total,
    removeItemFromCart,
    updateCartItem,
  } = useContext(CartContext);

  const cartTotal = total();

  return (
    <div className="cartViewContainer">
      <div className="cartItems">
        <h2>Tu carrito de compras</h2>
        {cart.map((item) => (
          <CartItem
            key={item.name}
            {...item}
            onRemove={removeItemFromCart}
            onUpdateCartItem={updateCartItem}
          />
        ))}
        {cartTotal === 0 ? (
          <p>Tu carrito de compra está vacío</p>
        ) : (
          <button onClick={clearCart}>Vaciar Carrito</button>
        )}
      </div>

      <div className="orderSummary">
        <h2>Resumen del pedido</h2>

        <div className="summaryItem">
          <span>Cantidad de elementos</span>
          <span>${totalQuantity()}</span>
          <span>Subtotal</span>
          <span>${cartTotal}</span>
        </div>

        {cartTotal > 0 ? (
          <Link to="/checkout" className="checkoutButton">
            Hacer el pedido
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default CartView;
