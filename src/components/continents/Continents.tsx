"use client";

import { gql, useQuery } from "@apollo/client";
import { Card } from '@mui/material';

interface ContinentCard {
  name: string;
  code?: string;
}

const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      code
      name
    }
  }
`;

function Continents() {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Error: Something went wrong</p>;

  return (
    <div>
      <h2 className="text-center my-10"> Choose a continent to discover its countries</h2>
      <div className="flex flex-wrap justify-center gap-4 item-center">
        {data.continents.map((continent: ContinentCard) => (
          <ContinentCard name={continent.name} key={continent.code} />
        ))}
      </div>
    </div>
  );
}

function ContinentCard({ name }: ContinentCard) {
  return (
    <Card className="basis-1/4 p-6 hover:scale-105 hover:cursor-pointer">
      <h2 className="text-center">{name}</h2>
    </Card>
  );
}

export default Continents;
