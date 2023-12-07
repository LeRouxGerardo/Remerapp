import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="NavBar" >
            <Link to='/'>
                <h3>Remerapp</h3>
            </Link>
            
            <div className='Categories'>
                <NavLink to={`/category/Bandas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Bandas</NavLink>
                <NavLink to={`/category/Juegos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Juegos</NavLink>
                <NavLink to={`/category/Deportivas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Deportivas</NavLink>
                <NavLink to={`/category/Series/Peliculas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Series/Peliculas</NavLink>
                <NavLink to={`/category/Personalizadas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Personalizadas</NavLink>          
            
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar