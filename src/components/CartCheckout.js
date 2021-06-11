import { connect } from "react-redux";
import { handleCheckout, clearCart } from "./Redux/actions";
import Paypal from "./Paypal";
const CartCheckout = ({ handle, checkout, clear, itemCount, total }) => {
  return (
    <div className="cart-checkout-div">
      <h2 className="checkout-total-items">Всего пунктов</h2>
      <p className="checkout-data">{itemCount}</p>
      <h3 className="checkout-total-items">Всего к оплате</h3>
      <p className="checkout-data">₽ {total}</p>

      <div className="checkout-button-div">
        {checkout === true ? (
          <Paypal />
        ) : (
          <button className="checkout-button" onClick={handle}>
            Проверить
          </button>
        )}
        <button className="checkout-button" onClick={clear}>
          Пустая тележка
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    checkout: state.checkout,
    itemCount: state.itemCount,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handle: () => dispatch(handleCheckout()),
    clear: () => dispatch(clearCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartCheckout);
