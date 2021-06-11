import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { clearCart } from "./Redux/actions";

function Paypal({ price }) {
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Products",
                amount: {
                  currency_code: "RUB",
                  value: price.total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          alert("Transaction completed by " + order.payer.name.given_name);
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [price]);

  return (
    <div>
      <div ref={paypal} price={price}></div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    price: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => {
      dispatch(clearCart);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paypal);
