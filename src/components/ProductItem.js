import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { addProduct, increase } from "./Redux/actions";

const ProductItem = ({ product, addProduct, cartItems, increase }) => {
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className="product-div" key={product.id}>
      <img src={product.img} className="product-image" alt="" />
      <p className="display-title">{product.title}</p>
      <p className="display-price"> ₽ . {product.price}</p>
      {isInCart(product) && (
        <button onClick={() => increase(product)} className="button-add">
          Добавить больше
        </button>
      )}
      {!isInCart(product) && (
        <button onClick={() => addProduct(product)} className="button-add">
          Добавить в корзину
        </button>
      )}
      <Link to="/cart">
        <button className="button-add">Проверить</button>
      </Link>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    itemCount: state.itemCount,
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { addProduct: addProduct, increase: increase },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
