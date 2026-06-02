import { useEffect, useState } from "react";

import API from "../api/api";

import CustomerForm from "../components/customers/CustomerForm";
import CustomerTable from "../components/customers/CustomerTable";

function Customers() {

  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {

    try {

      const response =
        await API.get("/customers/");

      setCustomers(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const deleteCustomer = async (id) => {

    try {

      await API.delete(`/customers/${id}`);

      alert("Customer Deleted");

      fetchCustomers();

    } catch (error) {

      alert(
        error.response?.data?.detail ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="p-6">

      <CustomerForm
        refreshCustomers={fetchCustomers}
      />

      <CustomerTable
        customers={customers}
        deleteCustomer={deleteCustomer}
      />

    </div>
  );
}

export default Customers;