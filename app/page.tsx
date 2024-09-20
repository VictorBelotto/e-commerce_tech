import { Suspense } from "react";
import CardWrapper from "./ui/card/card-wrapper";
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Suspense fallback={<p>Loading</p>}>
        <CardWrapper />
      </Suspense>
    </main>
  );
}
