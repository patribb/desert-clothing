import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkoutItem.styles.scss';


const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price} = cartItem;
    const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className='checkout-item-container'>
        <div className="image-container">
            <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
        <div onClick={removeItemHandler} className='arrow'>
            &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={addItemHandler} className="arrow">
            &#10095;
        </div>
        </span>
        <span className='price'>{price} €</span>
        <div onClick={clearItemHandler} className="remove-button">&#10005;</div>
    </div>
  )
}

export default CheckoutItem;