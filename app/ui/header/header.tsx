import Cart from "../icons/cart";
import Favorite from "../icons/favorite";
import Search from "./search";

export default function Header() {
  return (
    <header className="flex w-full justify-between absolute top-0 bg-blue-950 px-8 py-4 items-center">
      <div className="flex gap-16">
        <h3 className="text-white">E-Tech</h3>
        <Search/>
      </div>
      <div className="flex gap-9">
        <Favorite className="cursor-pointer" />
        <Cart className="cursor-pointer"/>
      </div>

    </header>
  )
}