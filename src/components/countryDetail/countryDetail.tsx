"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

import { Card } from "@mui/material";

const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      capital
      currency
      code
      emoji
      continent {
        code
      }
    }
  }
`;

function Country({ code }: { code: string }) {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Error: Something went wrong</p>;

  return (
    <div>
      <h2 className="text-center my-10"> {data.country?.name}</h2>
      <div className="flex justify-center gap-4 item-center">
        <Card className="flex flex-col justify-center gap-4 item-center p-6 text-center">
          <p>{data.country?.emoji}</p>
          <p>Capital : <br/> <b>{data.country?.capital}</b></p>
          <p>Money : <br/> <b>{data.country?.currency}</b></p>
        </Card>
      </div>
    </div>
  );
}

export default Country;
