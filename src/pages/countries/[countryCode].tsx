import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Countries from "@/components/contries/CountriesCard";

export default function CountriesPages() {
  const router = useRouter();
  const [countryCode, setCountryCode]: any = useState("")

  useEffect(() => {
    setCountryCode(router.query.countryCode);
  }, [router])
  
  return (
    <div>
      <Countries code={countryCode} />
    </div>
  );
}
