function OrderTable({ orders }) {

  if (orders.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        No Orders Found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">
              Order ID
            </th>

            <th className="p-4 text-left">
              Customer ID
            </th>

            <th className="p-4 text-left">
              Total Amount
            </th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr
              key={order.id}
              className="border-t"
            >

              <td className="p-4 font-medium">
                #{order.id}
              </td>

              <td className="p-4">
                {order.customer_id}
              </td>

              <td className="p-4">
                ₹{order.total_amount}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default OrderTable;