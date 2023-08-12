import React, { useState } from "react";
import "../CartItem/cartItem.css";

const CartItem = ({ id, name, quantity, price, image, onRemove, onUpdateCartItem }) => {

  //actualizar la cantidad directo desde el carro
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleDecrement = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      updateCartQuantity(newQuantity);
    }
  };

  const handleIncrement = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    updateCartQuantity(newQuantity);
  };

  const updateCartQuantity = (newQuantity) => {
    const updatedCartItem = { id, name, quantity: newQuantity, price, image };
    onUpdateCartItem(updatedCartItem);
  };
  
  return (
    <div className="cartItemContainer">
      <img src={image} alt={name} className="cartItemImage cartDetail" />
      <p className="cartDetail">{name}</p>
      <div className="cartDetail cartQuantityArea">
        <button className='cartButtons' onClick={handleDecrement}>-</button>
        <p>Cant. {itemQuantity}</p>
        <button className='cartButtons' onClick={handleIncrement}>+</button>
      </div>

      <p className="cartDetail">Precio: ${price}</p>
      <button className="cartDeleteButton" onClick={() => onRemove(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
