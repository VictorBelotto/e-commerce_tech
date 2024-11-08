import { Suspense } from "react";
import CardWrapper from "./ui/card/card-wrapper";
import Filters from "./ui/components/filters";
export default function Home() {

  return (
    <main className="flex min-h-screen justify-center p-12">
        <Filters/>
      <Suspense fallback={<p>Loading</p>}>
        <CardWrapper />
      </Suspense>
    </main>
  );
}
