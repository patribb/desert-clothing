import Button from '../button/Button';
import './cartDropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items" />
      <Button>IR A CAJA</Button>
    </div>
  )
}

export default CartDropdown;
