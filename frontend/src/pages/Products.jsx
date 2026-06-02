import { useEffect, useState } from "react";

import API from "../api/api";

import ProductForm from "../components/products/ProductForm";
import ProductTable from "../components/products/ProductTable";
import ProductCard from "../components/products/ProductCard";

function Products() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {

    try {

      const response =
        await API.get("/products/");

      setProducts(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {

    try {

      await API.delete(`/products/${id}`);

      alert("Product Deleted");

      fetchProducts();

    } catch (error) {

      alert(
        error.response?.data?.detail ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="p-6">

      <ProductForm
        refreshProducts={fetchProducts}
      />

      <div className="hidden lg:block">

        <ProductTable
          products={products}
          deleteProduct={deleteProduct}
        />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
          />

        ))}

      </div>

    </div>
  );
}

export default Products;