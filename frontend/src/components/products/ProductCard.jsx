function ProductCard({
  product,
  deleteProduct,
}) {

  const isLowStock =
    product.quantity < 5;

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">

      <div className="flex items-start justify-between mb-4">

        <div>

          <h2 className="text-2xl font-bold">
            {product.name}
          </h2>

          <p className="text-gray-500">
            SKU: {product.sku}
          </p>

        </div>

        {isLowStock && (
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
            Low Stock
          </span>
        )}

      </div>

      <div className="space-y-2 mb-5">

        <p className="text-lg">
          <span className="font-semibold">
            Price:
          </span>{" "}
          ₹{product.price}
        </p>

        <p className="text-lg">
          <span className="font-semibold">
            Quantity:
          </span>{" "}
          {product.quantity}
        </p>

      </div>

      <button
        onClick={() =>
          deleteProduct(product.id)
        }
        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
      >
        Delete Product
      </button>

    </div>
  );
}

export default ProductCard;