import Image from "next/image";
import { FC } from "react";
import { Product } from "../pages/api/models/product";

const ProductCard: FC<Product> = ({ src, name, price }) => (
  <>
    <img className="rounded-md" src={src} alt="Картинка товара" />
    <div className="info">
      <p className="text-lg font-medium text-white mt-1">{name}</p>
      <div className="flex items-center">
        <p className="text-md text-white">{price}</p>
        <Image
          className="ml-2"
          src="/coin.svg"
          alt="валюта"
          width={26}
          height={26}
        />
      </div>
    </div>
  </>
);

export default ProductCard;
