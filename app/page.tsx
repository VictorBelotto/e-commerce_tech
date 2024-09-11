import { Suspense } from "react";
import CardWrapper from "./ui/card/card-item";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[#fafafa]">
      <Suspense fallback={<p>Loading</p>}>
        <CardWrapper />
      </Suspense>
    </main>
  );
}
