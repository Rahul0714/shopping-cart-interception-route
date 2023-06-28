"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Product = ({ product }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Link
      // prefetch={false}
      href={`/product/${product.id}`}
      className="h-96 flex flex-col -5 rounded border group hover:scale-105 transition-transform ease-out duration-200"
    >
      {console.log(product.title)}
      <div className="relative max-h-72 flex-1">
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
      </div>
      <div className="font-semibold flex items-center justify-between mt-4 mb-1">
        <p className="w-40 truncate">{product.title}</p>
        <p>{product.price}</p>
      </div>
      <p className="italic w-64 line-clamp-2 text-gray-600">
        {product.description}
      </p>
    </Link>
  );
};

export default Product;
