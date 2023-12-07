import { useState, useEffect } from 'react'
import { getProducto, getProductoByCategory} from '../../asyncMocks'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [Producto, setProducto] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductoByCategory : getProducto

        asyncFunc(categoryId)
            .then(response => {
                setProducto(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList Producto={Producto}/> 
        </div>
    )
}

export default ItemListContainer