export const increase = (product) => {
  return { type: "INCREASE", payload: product };
};

export const decrease = (product) => {
  return { type: "DECREASE", payload: product };
};

export const addProduct = (product) => {
  return { type: "ADD_ITEM", payload: product };
};

export const removeProduct = (product) => {
  return { type: "REMOVE_ITEM", payload: product };
};

export const clearCart = () => {
  return { type: "CLEAR" };
};

export const handleCheckout = () => {
  return { type: "CHECKOUT" };
};

export const filterCart = (value) => {
  return { type: "CHECKBOX", payload: value };
};

export const filterPop = (value) => {
  return { type: "CHECK_POP", payload: value };
};

export const clearFilter = () => {
  console.log("clear filter");
  return { type: "CLEAR_FILTER" };
};
