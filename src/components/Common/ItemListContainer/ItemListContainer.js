import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import '../ItemListContainer/ItemListContainer.css'
import {collection, query, where, getDocs } from 'firebase/firestore';
import {db} from '../../../services/Firabase/Config'

const ItemListContainer = ({text}) => {

    const[products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams()

    useEffect( () => {

        setLoading(true)

        const collectionRef = categoryId ? query (collection(db, 'products'), where ('category', '==', categoryId)):collection(db, 'products')

        getDocs(collectionRef).then(response =>{
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).catch (error =>{
            console.log(error)
        }).finally(()=>{setLoading(false)})

    }, [categoryId])


    return(
        <div >
            <h1>{categoryId ? `${categoryId}` : text}</h1>
            {loading?(<p>loading...</p>):(<ItemList products={products}/>)}
    
        </div>
    )
}

export default ItemListContainer 