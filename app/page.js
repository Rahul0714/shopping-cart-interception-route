"use client";

import Product from "@/components/Product";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      console.log(products);
    };
    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48">
      <section className="flex flex-col space-y-12 pb-40">
        <h1 className="text-4xl text-center">Deals of the Day!</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
