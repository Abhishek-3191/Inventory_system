import { useEffect, useState } from "react";

import API from "../../api/api";

function OrderForm({ refreshOrders }) {

  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    customer_id: "",
    product_id: "",
    quantity: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    try {

      const customersResponse =
        await API.get("/customers/");

      const productsResponse =
        await API.get("/products/");

      setCustomers(customersResponse.data);

      setProducts(productsResponse.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/orders/", {
        customer_id: Number(formData.customer_id),

        items: [
          {
            product_id: Number(formData.product_id),
            quantity: Number(formData.quantity),
          },
        ],
      });

      alert("Order Created Successfully");

      setFormData({
        customer_id: "",
        product_id: "",
        quantity: "",
      });

      refreshOrders();

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
        Create Order
      </h2>

      <div className="grid gap-4">

        <select
          value={formData.customer_id}
          onChange={(e) =>
            setFormData({
              ...formData,
              customer_id: e.target.value,
            })
          }
          className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        >

          <option value="">
            Select Customer
          </option>

          {customers.map((customer) => (

            <option
              key={customer.id}
              value={customer.id}
            >
              {customer.full_name}
            </option>

          ))}

        </select>

        <select
          value={formData.product_id}
          onChange={(e) =>
            setFormData({
              ...formData,
              product_id: e.target.value,
            })
          }
          className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        >

          <option value="">
            Select Product
          </option>

          {products.map((product) => (

            <option
              key={product.id}
              value={product.id}
            >
              {product.name}
            </option>

          ))}

        </select>

        <input
          type="number"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={(e) =>
            setFormData({
              ...formData,
              quantity: e.target.value,
            })
          }
          className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Create Order
        </button>

      </div>

    </form>
  );
}

export default OrderForm;