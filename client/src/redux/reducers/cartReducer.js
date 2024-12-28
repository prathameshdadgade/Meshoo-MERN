// reducers/cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Check if the product already exists in the cart
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };

        default:
            return state;
    }
};

export default cartReducer;



// import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

// const initialState = {
//     cart: [], // Ensure this is an empty array
// };
// const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TO_CART:
//             return { ...state, cart: [...state.cart, action.payload] };
//         case REMOVE_FROM_CART:
//             return {
//                 ...state,
//                 cart: state.cart.filter((item) => item.id !== action.payload),
//             };
//         default:
//             return state;
//     }
// };

// export default cartReducer;