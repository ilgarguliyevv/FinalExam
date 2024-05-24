import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasket, removeBasket } from "../../redux/slice/foodSlice.js";
import "./wishlist.scss";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  const favorites = useSelector((state) => state.counter.favorite);
  const dispatch = useDispatch();
  return (
    <div id="favorite">
      <Helmet><title>Wishlist</title></Helmet>
      <div className="favoritepage">
        {favorites?.map((prod, index) => {
          return (
            <div className="favorit" key={index}>
              <img src={prod.image} alt="" />
              <h2>{prod.name}</h2>
              <p>{prod.description}</p>
              <p>${prod.price}</p>
              <button onClick={() => dispatch(setBasket(prod))}>
                Add to Basket
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;