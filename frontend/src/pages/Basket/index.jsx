// import React from 'react'
// import { useSelector } from 'react-redux'

// const Basket = () => {

//   const basket = useSelector((state)=> state.counter.basket)


//   return (
//     <div id='basket'>
//       {basket && basket.map((product,index)=> {
//         return (
//           <div className="basket" key={index}>
//           <div className="basket_page">
//             <img src={product.image} alt="" />
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//           </div>
//         </div>
//         )
//       })}

//     </div>
//   )
// }

// export default Basket

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./basket.scss";
import {
  removeAllBasket,
  decreaseCount,
  setBasket,
  removeBasket,
} from "../../redux/slice/foodSlice.js";
import { Helmet } from "react-helmet";

const Basket = () => {
  const basket = useSelector((state)=> state.counter.basket)
  const dispatch = useDispatch();
  return (
    <div id="basket">
      <div className="basketpage">
        <Helmet><title>Basket</title></Helmet>
        <div>
          <button onClick={() => dispatch(removeAllBasket([]))}>
            RemoveAll
          </button>
        </div>
        {basket &&
          basket.map((prod, index) => {
            return (
              <div className="cardbasket" key={index}>
                <div className="basketall">
                  <img src={prod.image} alt="" />
                  <h2>{prod.name}</h2>
                  <p>{prod.description}</p>
                  <p>${prod.price}</p>
                  <button onClick={() => dispatch(decreaseCount(prod))}>
                    -
                  </button>
                  <button>{prod.count}</button>
                  <button onClick={() => dispatch(setBasket(prod))}>+</button>
                  <button onClick={() => dispatch(removeBasket(prod))}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Basket;