function ProductTable({
  products,
  deleteProduct,
}) {

  if (products.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        No Products Found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">
              ID
            </th>

            <th className="p-4 text-left">
              Product Name
            </th>

            <th className="p-4 text-left">
              SKU
            </th>

            <th className="p-4 text-left">
              Price
            </th>

            <th className="p-4 text-left">
              Quantity
            </th>

            <th className="p-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr
              key={product.id}
              className="border-t"
            >

              <td className="p-4">
                {product.id}
              </td>

              <td className="p-4 font-medium">
                {product.name}
              </td>

              <td className="p-4">
                {product.sku}
              </td>

              <td className="p-4">
                ₹{product.price}
              </td>

              <td className="p-4">
                {product.quantity}
              </td>

              <td className="p-4">

                <button
                  onClick={() =>
                    deleteProduct(product.id)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ProductTable;