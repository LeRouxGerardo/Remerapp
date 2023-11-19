import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <h3>Remerapp</h3>
            <div>
                <button>Bandas</button>
                <button>Juegos</button>
                <button>Deportivas</button>
                <button>Series</button>
                <button>Personalizadas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar