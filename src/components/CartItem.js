import { connect } from "react-redux";
import { BsPlusCircleFill, BsTrashFill } from "react-icons/bs";
import { HiMinusCircle } from "react-icons/hi";
import { decrease, removeProduct, increase } from "./Redux/actions";
import { bindActionCreators } from "redux";

const CartItem = ({ cart, increase, cartItems, decrease, remove }) => {
  const quant = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };
  return (
    <>
      <div className="cart-image-div">
        <img src={cart.img} className="cart-image-round" alt="" />
      </div>
      <div>
        <div className="cart-title">{cart.title} </div>
        <div className="cart-price">Цена : ₽ {cart.price}</div>
      </div>
      {quant(cart) && (
        <div className="cart-quantity">Количество : {cart.quantity}</div>
      )}
      <div className="cart-icons">
        <BsPlusCircleFill
          onClick={() => increase(cart)}
          className="icon-plus"
        />
        {cart.quantity === 1 ? (
          <BsTrashFill onClick={() => remove(cart)} className="icon-plus" />
        ) : (
          <HiMinusCircle
            onClick={() => decrease(cart)}
            className="icon-minus"
          />
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { decrease: decrease, increase: increase, remove: removeProduct },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
