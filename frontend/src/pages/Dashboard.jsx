import { useEffect, useState } from "react";

import API from "../api/api";

function Dashboard() {

  const [stats, setStats] = useState({
    products: 0,
    customers: 0,
    orders: 0,
    lowStock: 0,
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {

    try {

      const productsResponse =
        await API.get("/products/");

      const customersResponse =
        await API.get("/customers/");

      const ordersResponse =
        await API.get("/orders/");

      const lowStockProducts =
        productsResponse.data.filter(
          (product) => product.quantity < 5
        );

      setStats({
        products:
          productsResponse.data.length,

        customers:
          customersResponse.data.length,

        orders:
          ordersResponse.data.length,

        lowStock:
          lowStockProducts.length,
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-md">

          <h2 className="text-lg text-gray-500">
            Total Products
          </h2>

          <p className="text-4xl font-bold mt-3">
            {stats.products}
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">

          <h2 className="text-lg text-gray-500">
            Total Customers
          </h2>

          <p className="text-4xl font-bold mt-3">
            {stats.customers}
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">

          <h2 className="text-lg text-gray-500">
            Total Orders
          </h2>

          <p className="text-4xl font-bold mt-3">
            {stats.orders}
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">

          <h2 className="text-lg text-gray-500">
            Low Stock Products
          </h2>

          <p className="text-4xl font-bold mt-3 text-red-500">
            {stats.lowStock}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;