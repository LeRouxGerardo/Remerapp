import Item from '../Item/Item';

const ItemList = ({Producto }) => {
     return(
        <div className='ListGroup'>
            {Producto.map(p => <Item key={p.id} {...p} />)}
        </div>
    ) 
}

export default ItemList