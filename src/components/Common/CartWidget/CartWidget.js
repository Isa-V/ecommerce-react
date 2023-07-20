import cart from '../../Common/CartWidget/Assets/cart.svg'

const CartWidget = () => {

  return (
    <div className='cartWidget'>
        <img src={cart} alt='cart icon'/>
        <div className='cartWidgetNumber'>0</div>
    </div>
  )
}

export default CartWidget;