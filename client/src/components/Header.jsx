import React, { Component } from 'react';
import './Header.css';
import Messho from '../assets/img/Meesho Logo - PNG Logo Vector Brand Downloads (SVG, EPS).jpg';
import Search from '../assets/img/search.png';
import Mobile from '../assets/img/mobile.png';
import User from '../assets/img/user.png';
import Card from '../assets/img/cart.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from './CartIcon';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            recentInputs: [],
            isSearchVisible: false,
            searchResults: [],
            user: null, // State to store user data
        };
    }

    componentDidMount() {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.setState({ user: JSON.parse(storedUser) });
      }
    }
    // Handle input change and show the search results
    handleInputChange = (event) => {
        const inputValue = event.target.value;
        this.setState({
            inputValue,
            isSearchVisible: inputValue.length > 0,
        });

        if (inputValue.length > 0) {
            this.fetchSearchResults(inputValue);
        } else {
            this.setState({ searchResults: [] });
        }
    };

   
    handleFormSubmit = (event) => {
        event.preventDefault();
        const { inputValue, recentInputs } = this.state;

        if (inputValue) {
            this.setState({
                recentInputs: [inputValue, ...recentInputs],
                inputValue: '',
                isSearchVisible: false,
                searchResults: [],
            });
        }
    };

    clearInput = () => {
        this.setState({
            inputValue: '',
            isSearchVisible: false,
            searchResults: [],
        });
    };

    // Logout functionality
    handleLogout = () => {
      localStorage.removeItem('isLoggedIn'); // Remove login session
      localStorage.removeItem('user'); // Remove user data from localStorage
      this.setState({ user: null }); // Clear user data from state
      window.location.reload(); // Refresh the page to reflect logout state
    };

    render() {
        const { inputValue, recentInputs, isSearchVisible, searchResults, user } = this.state;
       // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
       const { cartCount } = this.props;
       return (
            <header className="header">
                <div className="headerLeft">
                    <div className="logoContainer">
                        <img src={Messho} alt="Meesho Logo" />
                    </div>
                    <div className="searchInputContainer">
                        <div className="searchIcon">
                            <img src={Search} alt="Search Icon" />
                        </div>
                        <form id="inputForm" onSubmit={this.handleFormSubmit}>
                            <input
                                type="text"
                                placeholder="Try Saree, Kurti or Search by Product Code"
                                className="inputSearch"
                                value={inputValue}
                                onChange={this.handleInputChange}
                            />
                        </form>
                        {isSearchVisible && (
                            <div className="inputCloseSearch">
                                <i className="fa-solid fa-xmark" onClick={this.clearInput}></i>
                            </div>
                        )}
                        {isSearchVisible && searchResults.length > 0 && (
                            <div className="searchResultsModal">
                                <h3>Search Results</h3>
                                <div className="searchResultsList">
                                    {searchResults.map((result, index) => (
                                        <div className="resultItem" key={index}>
                                            <img src={result.img} alt={result.name} />
                                            <p>{result.name}</p>
                                            <p>{result.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="searchRecentModal">
                            <h3>Recent Searches</h3>
                            <div className="listofRecent">
                                {recentInputs.map((item, index) => (
                                    <div className="recentItem" key={index}>
                                        <div className="recentIcon">
                                            <img src="./img/recent.png" alt="Recent Icon" />
                                        </div>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headerRight">
                    <div className="downloadContainer">
                        <div className="mobileIcon">
                            <img src={Mobile} alt="Mobile Icon" />
                        </div>
                        <p>Download App</p>
                    </div>
                    <div className="becomeSupplierContainer">
                        <p>Become a Supplier</p>
                    </div>
                    <div className="profileAndCart">
                        <div className="profileContainer">
                            <div className="profileIcon">
                                <img src={User} alt="Profile Icon" />
                            </div>
                            {user ? (
                                <>
                                    <p>{user.firstname}</p>
                                    <button className="logout" onClick={this.handleLogout}>Logout</button>
                                </>
                            ) : (
                                <>
                                    <Link to="/signup">
                                        <p>Sign Up</p>
                                    </Link>
                                    <Link to="/login">
                                        <p>Login</p>
                                    </Link>
                                </>
                            )}
                        </div>
                        <div className="CartContainer">
                           <CartIcon /> {/* Display Cart Icon with Count */}
                         </div>
                    </div>
                </div>
            </header>
        );
    }
}
const mapStateToProps = (state) => ({
    cartCount: state.cart.cart.length, // Get the count of items in the cart
});

export default connect(mapStateToProps)(Header);
