import data from "../../data.json";
const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  allProducts: [...data],
  cartItems: [...storage],
  ...sumItems(storage),
  checkout: false,
  filter: [],
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };
    case "INCREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      //   console.log(state.cartItems, "cart from State");
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "DECREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "CHECKOUT":
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
        checkout: true,
      };
    case "CLEAR":
      return {
        cartItems: [],
        ...sumItems([]),
      };
    case "CHECKBOX":
      if (!state.filter.includes(action.payload)) {
        state.filter.push(action.payload);
      }
      return {
        ...state,
        filter: [...state.filter],
      };
    case "CHECK_POP":
      return {
        ...state,
        filter: state.filter.filter((item) => item !== action.payload),
      };
    case "CLEAR_FILTER":
      return {
        ...state,
        filter: [],
      };
    default:
      return state;
  }
};
