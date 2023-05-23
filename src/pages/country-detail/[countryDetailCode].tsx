import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Country from "@/components/countryDetail/countryDetail";


export default function CountriesPages() {
  const router = useRouter();
  const [countryDetailCode, setCountryDetailCode]: any = useState("");

  useEffect(() => {
    setCountryDetailCode(router.query.countryDetailCode);
  }, [router]);

  return (
    <div>
      <Country code={countryDetailCode} />
    </div>
  );
}
