import { connect } from "react-redux";
import CartCheckout from "./CartCheckout";
import CartItem from "./CartItem";
const CartDisplay = ({ cartItems }) => {
  return (
    <>
      <div className="cart-main-grid">
        {cartItems.length > 0 ? (
          <div className="cart-grid">
            {cartItems.map((cart) => (
              <CartItem key={cart.id} cart={cart} />
            ))}
          </div>
        ) : (
          <div className="noItem flex">Ваша корзина пуста</div>
        )}

        <div className="check-subgrid flex">
          {cartItems.length > 0 ? <CartCheckout /> : <></>}
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};
export default connect(mapStateToProps)(CartDisplay);
