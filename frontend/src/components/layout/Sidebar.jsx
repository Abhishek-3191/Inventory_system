import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const links = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Customers",
      path: "/customers",
    },
    {
      name: "Orders",
      path: "/orders",
    },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-lg p-5">
      
      <h1 className="text-2xl font-bold mb-8 text-blue-600">
        Inventory App
      </h1>

      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`p-3 rounded-lg transition ${
              location.pathname === link.path
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;