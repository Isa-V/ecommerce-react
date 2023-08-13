import { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import '../OrderSummary/orderSummary.css'

const OrderSummary = () => {
  const { orderDetails,clearCart} = useContext(CartContext);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  if (!orderDetails) {
    return <div className="orderSummaryContainer">No hay detalles de la orden disponibles</div>;
  }

  return (
    <div className="orderSummaryContainer">
      <h1>¡Ya está todo listo!</h1>
      <h3>Esta es la información de tu compra</h3>

      <div>
        <h4>Contacto</h4>
        <p>Nombre: {orderDetails.OrderSummary.firstName} {orderDetails.OrderSummary.lastName}</p>
        <p>Correo electrónico: {orderDetails.OrderSummary.email}</p>

        <h4>Despacho</h4>
        <p>Región: {orderDetails.OrderSummary.region}</p>
        <p>Comuna: {orderDetails.OrderSummary.comuna}</p>
        <p>Dirección: {orderDetails.OrderSummary.address}</p>
        <p>Código Postal: {orderDetails.OrderSummary.postalCode}</p>

        <h4>Compra</h4>
        <ul>
          {orderDetails.cart.map((item) => (
            <li key={item.id}>
              {item.name} - Cant. {item.quantity}
            </li>
          ))}
        </ul>
        <p>Total a Pagar: ${orderDetails.total}</p>
        <p>Número de Orden: {orderDetails.orderNumber}</p>
      </div>
    </div>
  );
};

export default OrderSummary;