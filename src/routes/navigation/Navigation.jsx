import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import {ReactComponent as CrmwLogo} from "../../assets/crown.svg"

const Navigation = () => {
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
          <Link className="nav-link" to="/auth">
            INICIAR SESIÓN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
