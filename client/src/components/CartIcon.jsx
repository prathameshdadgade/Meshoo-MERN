// components/CartIcon.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import Card from '../assets/img/cart.png';

const CartIcon = () => {
    const [showCart, setShowCart] = useState(false);
    const cartItems = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    // Toggle the display of the cart popup
    const toggleCart = () => {
        setShowCart(!showCart);
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="CartIconContainer">
            {/* Cart icon */}
            <div className="CartIcon" onClick={toggleCart}>
                <img src={Card} alt="Cart Icon" />
            </div>
            
            {/* Cart count */}
            <p>Cart ({cartItems.length})</p>

            {/* Cart popup */}
            {showCart && (
                <div className="CartPopup">
                    {cartItems.length > 0 ? (
                        <>
                            {cartItems.map((item) => (
                                <div key={item.id} className="CartItem">
                                    <div className="CartItemDetails">
                                        <p>{item.name}</p>
                                        <p>Price: ${item.price}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                    <div className="CartItemActions">
                                        <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                                    </div>
                                </div>
                            ))}
                            <div className="CartTotal">
                                <span>Total:</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <button className="PayNowBtn" onClick={() => alert('Proceeding to payment...')}>
                                Pay Now
                            </button>
                        </>
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default CartIcon;
