import Item from '../Item/Item'

const ItemList = ({Producto }) => {
    return(
        <div className='ListGroup'>
            {Producto.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList