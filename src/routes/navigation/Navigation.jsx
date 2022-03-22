import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from"./navigation.styles";
import { ReactComponent as CrmwLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cartIcon/CartIcon";
import CartDropdown from "../../components/cartDropdown/CartDropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen} = useContext(CartContext)

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrmwLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            TIENDA
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SALIR
            </NavLink>
          ) : (
            <NavLink to="/auth">
              INICIAR SESIÓN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        { isCartOpen && <CartDropdown /> }
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
