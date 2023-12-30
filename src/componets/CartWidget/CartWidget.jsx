import cartIcono from './assets/shoppingbag_102718.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cantidadTotal
 } = useContext(CartContext)
    
    return (
        <Link to="/cart" className='CartWidget'  /* style={{ display: cantidadTotal
 > 0 ? 'block' : 'none'}} */ >

            <img className='CartImg' src={cartIcono} alt="imagen bolsa de pedido"/>
            { cantidadTotal
 }
        </Link>
    )
}

export default CartWidget