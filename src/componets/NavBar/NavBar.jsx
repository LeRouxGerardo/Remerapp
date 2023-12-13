import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="NavBar" >
            <Link to='/'>
                <h3>Remerapp</h3>
            </Link>
            
            <div className='Categorias'>
                <button><NavLink to={`/category/Bandas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Bandas</NavLink></button>
                <button><NavLink to={`/category/Juegos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Juegos</NavLink></button>
                <button><NavLink to={`/category/Deportiva`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Deportivas</NavLink></button>
                <button><NavLink to={`/category/Series-Peliculas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Series/Peliculas</NavLink></button>
                <button><NavLink to={`/category/Personalizadas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Personalizadas</NavLink></button>       
            
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar