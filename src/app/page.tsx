import Continents from "../components/continents/ContinentCard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold my-10">Visiting countries</h1>
      <Continents />
    </div>
  );
}
