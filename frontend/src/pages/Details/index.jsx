// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const Detail = () => {
//   const [product, setProduct] = useState()
//   const {id} = useParams()

// useEffect(() => axios
// .get(`http://localhost:3000/food/${id}`)

// .then((response)=> setProduct(response.data)

// .catch((error)=> {"Error", error})

// ),[id])

//   return (
//     <div>
//       <div className="details">
//         <div className="detail">
//           <img src={product.image} alt="" />
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//           <p>${product.price}</p>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Detail

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.scss";

const Detail = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/food/${id}`)
      .then((response) => setProducts(response.data))
      .catch((error) => {
        "Error", error;
      });
  }, [id]);
  return (
    <div>
      <div className="detailspage">
        <div className="detail">
          <img src={product.image} alt="" />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;