import './ItemListContainer.css';
import { useState, useEffect } from 'react'

import ItemList from '../ItemList/ItemList' 
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db,'Remerapp'), where('categoria', '==', categoryId))
            : collection(db, 'Remerapp')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
        
            .finally(() => {
                setLoading(false)
            } )
    },[categoryId]);

    return (
        <div >
            <h1>{greeting}</h1>
            <ItemList product={product}/> 
        </div>
    )
}  



export default ItemListContainer