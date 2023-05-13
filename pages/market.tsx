import { useRouter } from "next/router";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../services/product/productApi";

const Market = () => {
  const { push, query } = useRouter();
  const { data } = useGetProductsQuery(query.category as string);

  const categoryHandler = (e: any) => {
    const target = e.target as HTMLLIElement;
    push({ query: { ...query, category: target.innerText } });
  };

  return (
    <>
      <div className="p-4 mt-2">
        <ul className="flex justify-center text-white text-lg">
          <li className="cursor-pointer" onClick={(e) => categoryHandler(e)}>
            Одежда
          </li>
          <li
            className="cursor-pointer ml-6"
            onClick={(e) => categoryHandler(e)}
          >
            Техника
          </li>
          <li
            className="cursor-pointer ml-6"
            onClick={(e) => categoryHandler(e)}
          >
            Сувениры
          </li>
          <li
            className="cursor-pointer ml-6"
            onClick={(e) => categoryHandler(e)}
          >
            Другое
          </li>
        </ul>
      </div>
      <ul className="h-full mt-2 grid grid-cols-5 gap-x-6 gap-y-2">
        {data?.map((product, index) => (
          <li className="cursor-pointer" key={index}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Market;
