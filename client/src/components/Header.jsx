import React, { Component } from 'react';
import './Header.css';
import Messho from '../assets/img/Meesho Logo - PNG Logo Vector Brand Downloads (SVG, EPS).jpg';
import Search from '../assets/img/search.png';
import Mobile from '../assets/img/mobile.png';
import User from '../assets/img/user.png';
// Remove unused imports
// import axios from 'axios';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon'; // If you need to use CartIcon, keep this import

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

    handleLogout = () => {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
      this.setState({ user: null });
      window.location.reload();
    };

    render() {
        const { inputValue, recentInputs, isSearchVisible, searchResults, user } = this.state;
        // If you're not using cartCount, remove this from the render method
        // const { cartCount } = this.props;

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
                                        <p>Log In</p>
                                    </Link>
                                </>
                            )}
                        </div>
                        {/* If using CartIcon, include it here */}
                        <CartIcon />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
