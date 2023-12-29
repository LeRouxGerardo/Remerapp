 import Item from '../Item/Item';

const ItemList = ({product }) => {
     return(
        <div className='ListGroup'>
            {product.map(p => <Item key={p.id} {...p} />)}
        </div>
    ) 
}

export default ItemList 