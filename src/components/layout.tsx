import "../app/globals.css";
import { Inter } from "next/font/google";
import { ApolloWrapper } from "../lib/apollo-wrapper";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  {
    return (
      <div className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-3xl font-bold my-10">Visiting countries</h1>
        <main>
          <ApolloWrapper>{children}</ApolloWrapper>
        </main>
      </div>
    );
  }
}
