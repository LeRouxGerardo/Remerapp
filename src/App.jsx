import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import  ItemCount from './componets/ItemCount/ItemCount'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount initial={1} stock={10} onAdd={(compraQ) => console.log('Cantidad agregada ',compraQ)}/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
