import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";
import {DropdownContainer, CartItems, EmptyMessage} from "./cartDropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <DropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Tu carro está vacio.</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>IR A CAJA</Button>
    </DropdownContainer>
  );
};

export default CartDropdown;
