import { CartContainer, CartItem, CheckoutButton } from "./CartElements";

import PropTypes from "prop-types"
const Cart = ({ cart, onCheckout }) => {
    const totalPrice = cart.reduce((total, item) => {
        // Convert price to a number if it's not already
        const price = parseFloat(item.price) || 0;
        return total + price;
      }, 0).toFixed(2)

    return (
      <CartContainer>
        <h3>Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map(item => (
            <CartItem key={item.id}>
              <p>{item.name} - ${parseFloat(item.price).toFixed(2)}</p>
            </CartItem>
          ))
        )}
        <p><strong>Total: ${totalPrice}</strong></p>
        <CheckoutButton onClick={onCheckout}>Checkout</CheckoutButton>
      </CartContainer>
    );
  };

  Cart.propTypes = {
    cart: PropTypes.object,
    onCheckout: PropTypes.func
  }
  export default Cart;
