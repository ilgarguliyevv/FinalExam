import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";
import { useSelector } from 'react-redux';

const Header = () => {
  const basket = useSelector((state) => state.counter.basket);
  let basketCount = basket.reduce((acc, elem) => {
      return (acc += elem.count);
  }, 0);
  const favorite = useSelector((state) => state.counter.favorite);
  return (
    <div id='header'>
      <div className="header-main">
        <div className="header-location">
          <h1>Tasty</h1>
          <div className="link">
            <Link>Home</Link>
            <Link>Menu</Link>
            <Link>Specialties</Link>
            <Link to={"/basket"}>Basket <sup>{basketCount}</sup></Link>
            <Link to={"/wishlist"}>Favorite <sup>{favorite.length}</sup></Link>
            <Link>Blog</Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header