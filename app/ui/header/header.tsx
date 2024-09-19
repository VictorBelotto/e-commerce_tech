import Link from "next/link";
import Cart from "../icons/cart";
import Favorite from "../icons/favorite";
import Search from "./search";

export default function Header() {
  return (
    <header className="flex w-full justify-between top-0 bg-blue-950 px-8 py-4 items-center">
      <div className="flex gap-16">
        <Link href='/'>
          <h3 className="text-white">E-Tech</h3>
        </Link>
        <Search />
      </div>
      <div className="flex gap-9">
        <Favorite className="cursor-pointer" />
        <Link href='/cart'>
          <Cart className="cursor-pointer" />
        </Link>

      </div>

    </header>
  )
}