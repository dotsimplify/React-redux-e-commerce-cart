import CartDisplay from "./CartDisplay";
import Navbar from "./Navbar";
const Cart = () => {
  return (
    <>
      <Navbar />
      <h1 className="cart-heading">Корзина</h1>
      <CartDisplay />
    </>
  );
};

export default Cart;
