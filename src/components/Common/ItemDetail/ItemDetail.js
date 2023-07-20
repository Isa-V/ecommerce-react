import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({id, name, description, price, category, stock, image}) => {
    return(
        <div className='ItemDetalContainerCard'>
            <aside className='ItemDetailImgContainer'>
                <img src={image} alt={name} className='ItemDetailImg'/>
            </aside>
            <div className='ItemDetailInfoContainer'>
                <header>
                    <h1>{name}</h1>
                    <p>Categoría: {category}</p>
                </header>
                <div>
                    <p>{description}</p>
                    <h5 className='ItemDetalPrice'>CLP ${parseInt(price).toLocaleString('es-CL', { minimumFractionDigits: 0 })}</h5>
                    <div className='ItemDetalMoreInfo'>
                        <p>Unidades disponibles: {stock}</p>
                        <p>Id del producto {id}</p>
                    </div>

                </div>
                <footer>
                    <ItemCount initial={1} stock={stock} addCart={(quantity)=> console.log('cantidad agregada al carrito: '+quantity)}/>
                </footer>
            </div>


        </div>
    )
}

export default ItemDetail