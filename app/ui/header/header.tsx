import Link from "next/link";
import Cart from "../icons/cart";
import Favorite from "../icons/favorite";
import Search from "./search";
import Login from "./login";
import CartComponent from "./cart";

export default function Header() {
  return (
    <header className="flex w-full  top-0 bg-[#222222] px-8 py-4 items-center justify-center">
      <div className="flex w-full max-w-[1480px] justify-between">
        <div className="flex gap-16">
          <Link href='/'>
            <h3 className="text-white">E-Tech</h3>
          </Link>
          <Search />
        </div>
        <div className="flex gap-9 items-center">

          <Link href='/favorites'>
            <Favorite className="cursor-pointer" />
          </Link>

          <Link href='/cart'>
            <CartComponent />
          </Link>

          <Login />
        </div>
      </div>
    </header>
  )
}