import {useState, useEffect} from 'react'
import { getProducts, getProductByCategory} from '../../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({text}) => {

    const[products, setProducts] = useState([]);

    const {categoryId} = useParams()

    useEffect( () => {
        const filterData = categoryId ? getProductByCategory : getProducts;

        filterData (categoryId)
        .then (response =>{
            setProducts(response)
        })
        .catch(
            error => {
                console.error(error)
            })

    }, [categoryId])


    return(
        <div >
            <h1>{categoryId ? `${categoryId}` : text}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer 