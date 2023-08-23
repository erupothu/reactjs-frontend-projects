import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {

  const items = useSelector((state: any) => state.checkoutCart.items);
  const count = 0 | useSelector((state: any) => state.checkoutCart.totalQuantity);
    return (
      <div className="header">
        <Link to="">
          <div className="header__logo">
            <StoreIcon className="header__logoImage" fontSize='large'></StoreIcon>
            <h2 className="header__logoTitle">ECommerce Shop</h2>
          </div>
        </Link>

        <div className="hearder__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon">
          </SearchIcon>
        </div>

        <div className="header__nav">
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
          <Link to="checkout">
            <div className='nav__itemBasket'>
              <ShoppingBasketIcon fontSize='large' ></ShoppingBasketIcon>
              <span className="nav__itemLineTwo nav__basketCount">{count}</span>
            </div>
          </Link>
        </div>
      </div>
    )
}

export default Header