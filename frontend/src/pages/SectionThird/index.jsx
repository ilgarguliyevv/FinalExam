

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import   { setBasket, setFavorite } from "../../redux/slice/foodSlice.js"
import { useNavigate } from "react-router-dom";
import "./sectionthird.scss";

const SectionThird = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/food")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        "Error", error;
      });
  });

  const handleBasket = (products) => {
    dispatch(setBasket(products));
  };
  return (
    <div id="menu">
      <div className="foods">
        <div className="food">
          <p className="our-menu">OUR MENU</p>
          <h1>Discover Our Exclusive Menu</h1>
        </div>
        <div className="Menyu">
          <button className="menu-main">Main</button>
          <button>Dessert</button>
          <button>Drinks</button>
        </div>
        <div className="menu-card">
          {products.map((product, index) => (
            <div className="menu-card-first" key={index}>
              <div className="card-about">
                <div
                  className="card-img"
                  onClick={() => navigate(`detail/${product._id}`)}
                >
                  <img src={product.image} alt="" />
                </div>
                <div>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                </div>
              </div>
              <div className="price">
                <p>${product.price}</p>
              </div>
              <div className="buttons">
                <button onClick={() => dispatch(setBasket(product))}>
                  Add to Basket
                </button>
                <button onClick={() => dispatch(setFavorite(product))}>
                  Add to Favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionThird;