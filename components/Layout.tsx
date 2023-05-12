import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <ul className="flex items-center pl-0 py-3">
          <Link className="nav__link text-sm text-black" href="/">
            <Image src="/logo.svg" alt="Логотип" width={180} height={60} />
          </Link>
          <Link className="nav__link text-sm text-dark ml-8" href="/events">
            Мероприятия
          </Link>
          <Link className="nav__link text-sm text-dark ml-4" href="/events">
            Бронь
          </Link>
          <Link className="nav__link text-sm text-dark ml-4" href="/events">
            Сотрудники
          </Link>
          <Link className="nav__link text-sm text-dark ml-4" href="/events">
            Магазин
          </Link>
        </ul>
        <div className="flex">
          <div className="search relative">
            <Image
              className="absolute top-2.5 left-3"
              src="/search.svg"
              alt="Аватар"
              width={24}
              height={24}
            />
            <input
              className="border-2 border-grey rounded-lg p-2 pl-10 focus:outline-none focus:ring-1"
              type="search"
              placeholder="Search..."
            />
          </div>
          <div className="flex items-center ml-6">
            <Image src="/coin.svg" alt="Монетка" width={28} height={28} />
            <p className="text-dark text-lg">50</p>
          </div>
          <Image
            className="profile ml-6"
            src="/avatar.svg"
            alt="Аватар"
            width={36}
            height={36}
          />
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
