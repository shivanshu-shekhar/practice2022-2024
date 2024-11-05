// src/components/CardGrid.js
import React, { useEffect, useState } from "react";

const CardGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Fake Store API using fetch
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  return (
    <section className="p-8">
      <h2 className="text-center text-2xl font-bold mb-4 dark:text-gray-100">Our Products</h2>
      <div className="flex justify-center">
        <div className="w-16 h-1 bg-blue-500"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow dark:text-gray-100"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-bold text-lg">{product.title}</h3>
            <p className="text-sm mt-2 mb-2">${product.price}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {product.description.slice(0, 60)}...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
