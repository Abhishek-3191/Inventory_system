import { useEffect, useState } from "react";

import API from "../api/api";

import OrderForm from "../components/orders/OrderForm";
import OrderTable from "../components/orders/OrderTable";

function Orders() {

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {

    try {

      const response =
        await API.get("/orders/");

      setOrders(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6">

      <OrderForm
        refreshOrders={fetchOrders}
      />

      <OrderTable
        orders={orders}
      />

    </div>
  );
}

export default Orders;