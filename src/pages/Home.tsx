import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";
import Countries from "../components/Countries";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
import { useSearchFilter } from "../context/searchFilterContext/useSearchFilter";
import { Country } from "../types";

const findIn = (value: string, key: string) => {
  if (!value || !key) return;
  return value.toLowerCase().includes(key.toLowerCase());
};

const fetchCountries = async () => {
  const res = await axios.get<Country[]>("https://restcountries.com/v3.1/all");
  return res.data;
};

export default function Home() {
  const { search, region: searchRegion } = useSearchFilter();

  const { data: countries, isPending: loading } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  const regions: string[] = useMemo(
    () => Array.from(new Set(countries?.map((country) => country.region))),
    [countries]
  );

  const filteredCountries: Country[] | undefined = useMemo(
    () =>
      countries?.filter((country) => {
        const { name, capital, region } = country;

        const isInData =
          findIn(name.official, search) ??
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          findIn(capital?.[0], search) ??
          findIn(region, search);

        const isInRegion = findIn(region, searchRegion);

        if (search && searchRegion) return isInRegion && isInData;
        else if (search) return isInData;
        else if (searchRegion) return isInRegion;
        else return country;
      }),
    [countries, search, searchRegion]
  );

  return (
    <div className="md:py-7 md:px-10 p-6">
      <SearchBar regions={regions} />
      {loading ? (
        <Spinner />
      ) : (
        <Countries countries={filteredCountries ?? []} />
      )}
    </div>
  );
}
