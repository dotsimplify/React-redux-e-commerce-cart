import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = ({ cartCount }) => {
  return (
    <div className="nav">
      <ul className="nav-links-ul">
        <a href="/">
          <li className="nav-links">Мой магазин</li>
        </a>
        <Link to="/cart">
          <li className="nav-links">
            <FaShoppingCart className="cart-icon" /> Корзина ({cartCount})
          </li>
        </Link>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartCount: state.itemCount,
  };
};
export default connect(mapStateToProps)(Navbar);
