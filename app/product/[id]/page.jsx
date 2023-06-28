"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";

const page = ({ params: { id } }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  useEffect(() => {
    id > 20 ? notFound() : null;

    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      console.log(data, product);
    };
    fetchProduct();
  }, []);
  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
          loading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }}`}
        onLoadingComplete={() => setLoading(false)}
      />

      <div className="divide-y">
        <div className="space-y-2 pb-8">
          <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
          <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
            ${product.price}
          </h2>
        </div>

        <div className="pt-8">
          <p className="text-xs md:text-sm">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
