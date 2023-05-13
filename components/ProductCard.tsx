import Image from "next/image";
import { FC } from "react";
import { Product } from "../pages/api/models/product";

const ProductCard: FC<Product> = ({ Src, Name, Price }) => (
  <>
    <img className="rounded-md" src={Src} alt="Картинка товара" />
    <div className="info">
      <p className="text-lg font-medium text-white mt-1">{Name}</p>
      <div className="flex items-center">
        <p className="text-md text-white">{Price}</p>
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
