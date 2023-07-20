import Item from "../Item/Item"
import '../ItemList/ItemList.css'

const ItemList = ({products}) => {

    return(
        <div className="CardsContainer">
            {products.map(prod=> <Item key={prod.id} {...prod}/>)}
        </div>
    )

}

export default ItemList