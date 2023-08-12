import cart from '../../Common/CartWidget/Assets/cart.svg'
import {useContext} from 'react'
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext);

  return (
    <div className='cartWidget'>
        <img src={cart} alt='cart icon'/>
        <div className='cartWidgetNumber'>{totalQuantity()}</div>
    </div>
  )
}

export default CartWidget;