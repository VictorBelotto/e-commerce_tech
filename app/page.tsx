import { fetchProducts } from "./lib/data";
import CardItem from "./ui/card/cardItem";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[#fafafa]">
      <CardItem/>
    </main>
  );
}
