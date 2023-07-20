import {useState, useEffect} from 'react'
import {getProductDetails} from '../../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(()=>{
        const productId = parseInt(itemId);

        getProductDetails(productId)
        .then (response => {
            setProduct(response)
        })
        .catch(error=>{
            console.error(error)
        })
    }, [itemId])

    return(
        <div className='cardsContainer'>
            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailContainer