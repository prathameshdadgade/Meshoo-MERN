// components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="CartPage">
            <h1>Your Cart</h1>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item.id} className="CartItem">
                        <h4>{item.name}</h4>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
            <div className="CartTotal">
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
            </div>
            <button className="PayNowBtn" onClick={() => alert('Proceeding to payment...')}>
                Pay Now
            </button>
        </div>
    );
};

export default Cart;
