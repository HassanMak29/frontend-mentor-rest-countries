import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Country } from "../types";

const fetchCountry = async (countryCode: string) => {
  const res = await axios.get<Country[]>(
    `https://restcountries.com/v3.1/alpha/${countryCode}`,
  );
  return res.data;
};

export default function Details() {
  const { countryCode } = useParams();
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

  const { data: country, isPending: loading } = useQuery({
    queryKey: ["country", countryCode],
    queryFn: () => {
      if (!countryCode) return;
      setBorderCountries([]);
      return fetchCountry(countryCode);
    },
  });

  const countryData = country?.[0] ?? ({} as Country);

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = countryData;

  useEffect(() => {
    if (!loading && borders) {
      borders.map((b) => {
        void fetchCountry(b).then((data) => {
          setBorderCountries((bc: string[]) => [...bc, data[0].name.common]);
        });
      });
    }
  }, [borders, loading]);

  return (
    <div className="min-h-screen px-6 py-10 md:px-10 md:py-14">
      <Link
        className="mb-14 flex w-28 items-center gap-3 rounded-md px-6 py-1.5 text-sm text-Text shadow-[0_0_10px_.5px_rgba(0,0,0,0.2)]"
        to="/"
      >
        <BsArrowLeft className="text-lg" />
        Back
      </Link>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-14 md:flex-row">
          <div className="h-64 basis-2/5">
            <img src={flags.png} alt="country flag" className="h-full w-full" />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-5 text-sm text-Text">
            <h1 className="text-lg font-bold">{name.official}</h1>
            <ul className="mb-4 flex gap-4">
              <div className="flex flex-col gap-2">
                <li className="flex gap-2">
                  <span className="font-semibold capitalize">
                    Native Name:{" "}
                  </span>
                  <p>
                    {name.nativeName[Object.keys(name.nativeName)[0]].official}
                  </p>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold capitalize">Population: </span>
                  <p>{new Intl.NumberFormat().format(population)}</p>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold capitalize">Region: </span>
                  <p>{region}</p>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold capitalize">Sub region: </span>
                  <p>{subregion}</p>
                </li>
                <li className="mb-8 flex gap-2 md:mb-0">
                  <span className="font-semibold capitalize">Capital: </span>
                  <p>{capital}</p>
                </li>
              </div>
              <div className="flex flex-col gap-2">
                <li className="flex gap-2">
                  <span className="font-semibold capitalize">
                    Top level domain:
                  </span>
                  <p>{tld[0]}</p>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold capitalize">Currencies:</span>
                  <p>
                    {Object.values(currencies)
                      .map((cur) => cur.name)
                      .join(", ")}
                  </p>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold capitalize">Languages:</span>
                  <p className="max-w-sm">
                    {Object.values(languages).join(", ")}
                  </p>
                </li>
              </div>
            </ul>
            <div
              className={`flex flex-col md:flex-row md:items-start ${
                borderCountries.length ? "gap-4" : "gap-2"
              }`}
            >
              <span className="font-semibold capitalize">
                Border countries:
              </span>
              <div className="flex flex-wrap gap-4">
                {borderCountries.length ? (
                  borderCountries.map((b, i) => (
                    <Link
                      key={i}
                      className="py-.5 rounded-sm bg-Elements px-5 text-sm text-Text shadow-[0_0_10px_.1px_rgba(0,0,0,0.2)]"
                      to={`/${borders?.[i]}`}
                    >
                      {b}
                    </Link>
                  ))
                ) : (
                  <span>None...</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
