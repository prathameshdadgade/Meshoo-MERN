import React, { Component } from 'react';
import Product from '../meesho/Product.json';
import './ProductsForYou.css';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
// Import images
import boatAirpods from '../assets/Productimg/boat_airpods.webp';
import bluetoothHeadset1 from '../assets/Productimg/Bluetooth_Headset_1.webp';
import bluetoothHeadset2 from '../assets/Productimg/Bluetooth_Headset_2.webp';
import bluetoothHeadset3 from '../assets/Productimg/Bluetooth_Headset_3.webp';
import bluetoothHeadset4 from '../assets/Productimg/Bluetooth_Headset_4.webp';
import bluetoothHeadset5 from '../assets/Productimg/Bluetooth_Headset_5.webp';
import bluetoothHeadset6 from '../assets/Productimg/Bluetooth_Headset_6.webp';
import bluetoothHeadset7 from '../assets/Productimg/Bluetooth_Headset_7.webp';
import bluetoothHeadset8 from '../assets/Productimg/Bluetooth_Headset_8.webp';
import bluetoothHeadset9 from '../assets/Productimg/Bluetooth_Headset_9.webp';
import bluetoothHeadset10 from '../assets/Productimg/Bluetooth_Headset_10.webp';
import bluetoothHeadset11 from '../assets/Productimg/Bluetooth_Headset_11.webp';
import bluetoothHeadset12 from '../assets/Productimg/Bluetooth_Headset_12.webp';
import premiumGold1 from '../assets/Productimg/premiumGold_1.webp';
import premiumGold2 from '../assets/Productimg/premiumGold_2.webp';
import premiumGold3 from '../assets/Productimg/premiumGold_3.webp';
import kurta1 from '../assets/Productimg/Kurta_1.webp';
import kurta2 from '../assets/Productimg/Kurta_2.webp';
import kurta3 from '../assets/Productimg/Kurta_4.webp';
import mobileAcces1 from '../assets/Productimg/mobile_acces_1.webp';
import mobileAcces2 from '../assets/Productimg/mobile_acces_2.webp';
import mobileAcces3 from '../assets/Productimg/mobile_acces_3.webp';
import sarees1 from '../assets/Productimg/sarees_1.jpg';
import sarees2 from '../assets/Productimg/sarees_2.webp';
import sarees3 from '../assets/Productimg/sarees_3.webp';
import sarees4 from '../assets/Productimg/sarees_4.webp';
import watch1 from '../assets/Productimg/watch_1.webp';
import watch2 from '../assets/Productimg/watch_2.webp';

// Create an image map
const imageMap = {
    'boat_airpods.webp': boatAirpods,
    'Bluetooth_Headset_1.webp': bluetoothHeadset1,
    'Bluetooth_Headset_2.webp': bluetoothHeadset2,
    'Bluetooth_Headset_3.webp': bluetoothHeadset3,
    'Bluetooth_Headset_4.webp': bluetoothHeadset4,
    'Bluetooth_Headset_5.webp': bluetoothHeadset5,
    'Bluetooth_Headset_6.webp': bluetoothHeadset6,
    'Bluetooth_Headset_7.webp': bluetoothHeadset7,
    'Bluetooth_Headset_8.webp': bluetoothHeadset8,
    'Bluetooth_Headset_9.webp': bluetoothHeadset9,
    'Bluetooth_Headset_10.webp': bluetoothHeadset10,
    'Bluetooth_Headset_11.webp': bluetoothHeadset11,
    'Bluetooth_Headset_12.webp': bluetoothHeadset12,
    'premiumGold_1.webp': premiumGold1,
    'premiumGold_2.webp': premiumGold2,
    'premiumGold_3.webp': premiumGold3,
    'Kurta_1.webp': kurta1,
    'Kurta_2.webp': kurta2,
    'Kurta_4.webp': kurta3,
    'mobile_acces_1.webp': mobileAcces1,
    'mobile_acces_2.webp': mobileAcces2,
    'mobile_acces_3.webp': mobileAcces3,
    'sarees_1.jpg': sarees1,
    'sarees_2.webp': sarees2,
    'sarees_3.webp': sarees3,
    'sarees_4.webp': sarees4,
    'watch_1.webp': watch1,
    'watch_2.webp': watch2
};


class ProductsForYou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: 'all',
            searchTerm: ''
        };
    }

    handleCategoryChange = (event) => {
        this.setState({ selectedCategory: event.target.id });
    };

    handleSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value.toLowerCase() });
    };

    getFilteredProducts() {
        const { selectedCategory, searchTerm } = this.state;
        return Product.filter(product => {
            return (selectedCategory === 'all' || product.category === selectedCategory) &&
                   product.name.toLowerCase().includes(searchTerm);
        });
    }

    handleAddToCart = (product) => {
        this.props.addToCart(product);
    };

    handleRemoveFromCart = (productId) => {
        this.props.removeFromCart(productId);
    };

    render() {
        const filteredProducts = this.getFilteredProducts();
        const { cart } = this.props;

        // Ensure cart is an empty array if undefined
        const cartItems = cart || [];

        return (
            <div className="Product_container_You">
                <h1>Products For You</h1>
                <div className="product_container_you_content">
                    <aside className="product_category_you_aside">
                        <h3>Category</h3>
                        <div className="search_category_input">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search" onChange={this.handleSearchChange} />
                        </div>
                        <div className="display_Category_list">
                            {/* Category filter options */}
                            <label htmlFor="all">
                                <input type="checkbox" id="all" checked={this.state.selectedCategory === 'all'} onChange={this.handleCategoryChange} />
                                <span>All</span>
                            </label>
                            {/* Other categories like Bluetooth Headset, Men Chains, etc. */}
                        </div>
                    </aside>
                    <div className="product_category_display" id="product_category_displayId">
                        {filteredProducts.map(product => {
                            // Check if the product is in the cart
                            const isInCart = cartItems.find(item => item.id === product.id);
                            return (
                                <div key={product.id} className="productCard">
                                    <div className="product_image">
                                        <img src={imageMap[product.img]} alt={product.name} />
                                    </div>
                                    <h4 className="product_name">{product.name}</h4>
                                    <p>{product.desc}</p>
                                    <p className="product_price">Price: ${product.price}</p>
                                    <p>Rating: {product.rating} ({product.review} reviews)</p>
                                    {isInCart ? (
                                        <button className="cartButton remove" onClick={() => this.handleRemoveFromCart(product.id)}>
                                            Remove from Cart
                                        </button>
                                    ) : (
                                        <button  className="cartButton add" onClick={() => this.handleAddToCart(product)}>
                                            Add to Cart
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addToCart,
    removeFromCart,
};

const mapStateToProps = (state) => ({
    cart: state.cart.cart, // Assuming the cart is stored in the Redux state
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsForYou);

