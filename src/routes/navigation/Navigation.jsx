import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
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
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrmwLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            TIENDA
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SALIR
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              INICIAR SESIÓN
            </Link>
          )}
          <CartIcon />
        </div>
        { isCartOpen && <CartDropdown /> }
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
