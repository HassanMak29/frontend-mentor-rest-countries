import { Country } from "../types";
import CountryCard from "./CountryCard";

export default function Countries({ countries }: { countries: Country[] }) {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-16">
      {countries.map((country) => (
        <CountryCard key={country.name.official} country={country} />
      ))}
    </div>
  );
}
