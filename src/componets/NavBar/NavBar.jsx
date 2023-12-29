import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="NavBar" >
            <Link to='/'>
                <h1>Remerapp</h1>
            </Link>
            
            <div className='Categorias'>
                <button className='botonNav'><NavLink to={`/category/Bandas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Bandas</NavLink></button>
                <button className='botonNav'><NavLink to={`/category/Juegos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Juegos</NavLink></button>
                <button className='botonNav'><NavLink to={`/category/Deportiva`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Deportivas</NavLink></button>
                <button className='botonNav'><NavLink to={`/category/Series-Peliculas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Series/Peliculas</NavLink></button>
                <button className='botonNav'><NavLink to={`/category/Personalizadas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Personalizadas</NavLink></button>       
            
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar