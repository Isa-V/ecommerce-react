import {useState} from "react";
import '../ItemCount/ItemCount.css'

const ItemCount = ({stock, initial, addCart}) => {

    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity< stock){
            setQuantity(quantity+1);
        }
    }

    const decrement = () => {
        if (quantity>0){
            setQuantity(quantity-1);
        }
    }

    const addCartButton = () => {
        if(quantity>0){
            addCart(quantity)
        }
    }
    return(

        <div className="itemCountContainer">
            <div className="buttonsRow">
                <button onClick={increment}>+</button>
                <h3>{quantity}</h3>
                <button onClick={decrement}>-</button>
            </div>

            <div>
                <button className="addToCartButton" onClick={addCartButton}>Agregar a la bolsa</button>
            </div>

        </div>

    );



}

export default ItemCount;