import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import  Cart from './componets/Cart/Cart';
import Checkout from './componets/Checkout/Checkout'

import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar className="navegacion"/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Elegí tu proxima Remera'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Elegí por categoría'}/>}/>
            <Route path='/item/:itemId' element ={<ItemDetailContainer />}/>
            <Route path='/cart' element ={<Cart />} />
            <Route path='/checkout' element ={<Checkout />} />
            <Route path='*' element={<h1 >404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
