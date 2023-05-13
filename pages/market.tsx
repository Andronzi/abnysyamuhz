import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Product } from "./api/models/product";

const Market = () => {
  const { push, query } = useRouter();
  const [products, setProducts] = useState([] as Product[]);

  async function getProducts(category: string) {
    const products = await axios.get(
      `http://localhost:3000/api/product?category=${category}`
    );
    setProducts(products.data);
  }

  useEffect(() => {
    getProducts(query.category);
  }, [query]);

  const categoryHandler = (e: any) => {
    const target = e.target as HTMLLIElement;
    push({ query: { ...query, category: target.innerText } });
  };

  return (
    <>
      <div className="p-4 mt-2">
        <ul className="flex text-white text-lg">
          <li onClick={(e) => categoryHandler(e)}>Одежда</li>
          <li className="ml-6" onClick={(e) => categoryHandler(e)}>
            Техника
          </li>
          <li className="ml-6" onClick={(e) => categoryHandler(e)}>
            Сувениры
          </li>
          <li className="ml-6" onClick={(e) => categoryHandler(e)}>
            Другое
          </li>
        </ul>
      </div>
      <ul className="h-screen mt-2 grid grid-cols-5 gap-x-6 gap-y-2">
        {products.map((product, index) => (
          <li className="cursor-pointer" key={index}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Market;
