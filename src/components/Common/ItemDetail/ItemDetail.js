import {useContext, useState, useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'
import { CartContext } from '../Context/CartContext'
import CartModal from "../CartModal/CartModal";
import Modal from "react-modal"; 

const ItemDetail = ({id, name, description, price, category, stock, image}) => {
    //modal
    useEffect(() => {
        Modal.setAppElement("body");
      }, []);

    const [modalIsOpen, setModalIsOpen] = useState (false);

    const openModal = () =>{
        setModalIsOpen(true);
    }

    const closeModal = () =>{
        setModalIsOpen(false);
    }



    const [addQuantity, setAddQuantity] = useState(0);

    const { addItem } = useContext(CartContext);

    const handlerQuantity = (quantity) =>{
        setAddQuantity(quantity)

        const item = {
            id, name, price, image
        }

        addItem (item, quantity)

        openModal()
    }

    return(
        <div className='ItemDetalContainerCard'>
            <CartModal isOpen={modalIsOpen} onRequestClose={closeModal} />
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
                    {/*<ItemCount initial={1} stock={stock} addCart={(quantity)=> console.log('cantidad agregada al carrito: '+quantity)}/>*/}
                    <ItemCount initial={1} stock={stock} addCart={handlerQuantity}/>
                    <CartModal isOpen={modalIsOpen} onRequestClose={closeModal} />
                </footer>
            </div>


        </div>
    )
}

export default ItemDetail