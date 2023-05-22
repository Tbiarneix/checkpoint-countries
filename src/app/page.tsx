import Continents from "../components/continents/Continents";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold my-10">Visiting countries</h1>
      <Continents />
    </main>
  );
}
