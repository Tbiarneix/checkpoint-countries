"use client";

import { gql, useQuery } from "@apollo/client";
import { Card } from "@mui/material";
import { CountriesCardType } from "@/app/types/continents.types";
import Link from "next/link";

const GET_CONTINENT = gql`
  query GetContinent($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        name
        code
        emoji
      }
    }
  }
`;

function Countries({ code }: { code: string }) {
  const { loading, error, data } = useQuery(GET_CONTINENT, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Error: Something went wrong</p>;

  return (
    <div>
      <h2 className="text-center my-10">
        {" "}
        Select a country of {data.continent?.name}
      </h2>
      <div className="flex flex-wrap justify-center gap-4 item-center">
        {data.continent?.countries.map((continent: CountriesCardType) => (
          <CountryCard
            name={continent.name}
            key={continent.code}
            code={continent.code}
          />
        ))}
      </div>
    </div>
  );
}

function CountryCard({ name, code }: CountriesCardType) {
  return (
    <div className="basis-1/4 hover:scale-105 hover:cursor-pointer">
      <Link href={`/country-detail/${encodeURIComponent(code)}`}>
        <Card className="p-6">
          <h2 className="text-center">{name}</h2>
        </Card>
      </Link>
    </div>
  );
}

export default Countries;
