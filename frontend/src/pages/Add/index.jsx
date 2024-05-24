import axios from "axios";
import React, { useEffect, useState } from "react";
import "./add.scss";
import { Helmet } from "react-helmet";

const Admin = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    img: "",
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/food");
      setData(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/food", form);
      setForm({ img: "", name: "", description: "", price: "" });
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/food/${id}`);
      fetchData();
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="admin">
      <Helmet><title>Add</title></Helmet>
      <main>
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            placeholder="img"
            value={form.img}
            onChange={(e) => setForm({ ...form, img: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />
          <button type="submit">POST</button>
        </form>
        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img src={product.image} alt="" />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>${product.price}</td>
                  <td>
                    <button onClick={() => handleDelete(product._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Admin;