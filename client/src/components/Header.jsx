import React, { Component } from 'react';
import './Header.css';
import Messho from '../assets/svg/meesho-logo.svg';
import Search from '../assets/svg/search-icon.svg';
import Mobile from '../assets/svg/mobile-icon.svg';
import User from '../assets/svg/user-icon.svg';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      recentInputs: [],
      isSearchVisible: false,
      searchResults: [],
      user: null,
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

  fetchSearchResults = async (query) => {
    try {
      const response = await axios.get(`/api/search?q=${query}`);
      this.setState({ searchResults: response.data });
    } catch (error) {
      console.error('Error fetching search results:', error);
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
    this.props.navigate('/login');
  };

  render() {
    const { inputValue, recentInputs, isSearchVisible, searchResults, user } = this.state;

    return (
      <header className="header">
        <div className="headerLeft">
          <div className="logoContainer" onClick={() => this.props.navigate('/')}>
            <img src={Messho} alt="Meesho Logo" />
          </div>
          <div className="searchInputContainer">
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
              <div className="inputCloseSearch" onClick={this.clearInput}>
                <i className="fa-solid fa-xmark"></i>
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
            {!isSearchVisible && recentInputs.length > 0 && (
              <div className="searchRecentModal">
                <h3>Recent Searches</h3>
                <div className="listofRecent">
                  {recentInputs.map((item, index) => (
                    <div className="recentItem" key={index}>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="headerRight">
          <div className="downloadContainer">
            <img src={Mobile} alt="Mobile Icon" />
            <p>Download App</p>
          </div>
          <div className="becomeSupplierContainer">
            <p>Become a Supplier</p>
          </div>
          <div className="profileAndCart">
            <div className="profileContainer">
              <img src={User} alt="Profile Icon" />
              {user ? (
                <>
                  <p>{user.firstname}</p>
                  <button className="logout" onClick={this.handleLogout}>
                    Logout
                  </button>
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
              <CartIcon />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default (props) => {
  const navigate = useNavigate();
  return <Header {...props} navigate={navigate} />;
};
