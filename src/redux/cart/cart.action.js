import CartActionTypes from "./cart.types";


// No payload needed as the reducer use old
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
