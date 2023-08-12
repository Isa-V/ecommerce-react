import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../../services/Firabase/Config'

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)
    const [loading, serLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(()=>{
        serLoading(true)

        const docRef = doc(db, 'products', itemId);

        getDoc(docRef).then(response=>{
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        }).catch(error=>{console.log(error)
        }).finally(()=>{
            serLoading(false)
        })
    }, [itemId])

    return(
        <div className='cardsContainer'>
            {loading===true? (<p>Loading...</p>):(<ItemDetail {...product}/>)}
            
        </div>
    )

}

export default ItemDetailContainer