import { useState } from "react";

import API from "../../api/api";

function ProductForm({ refreshProducts }) {

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/products/", {
        ...formData,
        price: Number(formData.price),
        quantity: Number(formData.quantity),
      });

      alert("Product Added Successfully");

      setFormData({
        name: "",
        sku: "",
        price: "",
        quantity: "",
      });

      refreshProducts();

    } catch (error) {

      alert(
        error.response?.data?.detail ||
        "Something went wrong"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-6"
    >

      <h2 className="text-2xl font-bold mb-5">
        Add Product
      </h2>

      <div className="grid gap-4">

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="sku"
          placeholder="SKU"
          value={formData.sku}
          onChange={handleChange}
          className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add Product
        </button>

      </div>

    </form>
  );
}

export default ProductForm;