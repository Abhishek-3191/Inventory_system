import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <h1 className="text-2xl font-bold">
          Inventory System
        </h1>

        <div className="flex gap-6 text-lg">
          <Link
            to="/"
            className="hover:text-gray-200 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/products"
            className="hover:text-gray-200 transition"
          >
            Products
          </Link>

          <Link
            to="/customers"
            className="hover:text-gray-200 transition"
          >
            Customers
          </Link>

          <Link
            to="/orders"
            className="hover:text-gray-200 transition"
          >
            Orders
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;