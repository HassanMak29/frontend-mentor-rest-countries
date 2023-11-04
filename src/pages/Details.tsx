import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Country } from "../types";

const fetchCountry = async (countryCode: string) => {
  const res = await axios.get<Country[]>(
    `https://restcountries.com/v3.1/alpha/${countryCode}`
  );
  return res.data;
};

export default function Details() {
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

  const { data: country, isPending: loading } = useQuery({
    queryKey: ["countries"],
    queryFn: () => {
      if (!countryCode) return;
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
    <div className="md:py-14 md:px-10 py-10 px-6 min-h-screen">
      <button
        className="flex items-center gap-3 py-1.5 px-6 text-sm rounded-md shadow-[0_0_10px_.5px_rgba(0,0,0,0.2)] mb-14 text-Text"
        onClick={() => {
          navigate(-1);
        }}
      >
        <BsArrowLeft className="text-lg" />
        Back
      </button>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col md:flex-row gap-14">
          <div className="basis-2/5 h-64">
            <img src={flags.png} alt="country flag" className="w-full h-full" />
          </div>
          <div className="flex-1 text-Text text-sm flex flex-col justify-center gap-5">
            <h1 className="font-bold text-lg">{name.official}</h1>
            <ul className="columns-2 flex flex-col gap-2 md:flex-wrap md:h-36 mb-4 md:mb-0">
              <li className="flex gap-2">
                <span className="capitalize font-semibold">Native Name: </span>
                <p>
                  {name.nativeName[Object.keys(name.nativeName)[0]].official}
                </p>
              </li>
              <li className="flex gap-2">
                <span className="capitalize font-semibold">Population: </span>
                <p>{new Intl.NumberFormat().format(population)}</p>
              </li>
              <li className="flex gap-2">
                <span className="capitalize font-semibold">Region: </span>
                <p>{region}</p>
              </li>
              <li className="flex gap-2">
                <span className="capitalize font-semibold">Sub region: </span>
                <p>{subregion}</p>
              </li>
              <li className="flex gap-2 mb-8 md:mb-0">
                <span className="capitalize font-semibold">Capital: </span>
                <p>{capital}</p>
              </li>
              <li className="flex gap-2">
                <span className="capitalize font-semibold">
                  Top level domain:
                </span>
                <p>{tld[0]}</p>
              </li>
              <li className="flex gap-2">
                <span className="capitalize font-semibold">Currencies:</span>
                <p>
                  {Object.values(currencies)
                    .map((cur) => cur.name)
                    .join(", ")}
                </p>
              </li>
              <li className="flex gap-2">
                <span className="capitalize font-semibold">Languages:</span>
                <p>{Object.values(languages).join(", ")}</p>
              </li>
            </ul>
            <div
              className={`flex md:flex-row flex-col md:items-start ${
                borderCountries.length ? "gap-4" : "gap-2"
              }`}
            >
              <span className="capitalize font-semibold">
                Border countries:
              </span>
              <div className="flex gap-4 flex-wrap">
                {borderCountries.length ? (
                  borderCountries.map((b, i) => (
                    <a
                      key={b}
                      className="py-.5 px-5 text-sm rounded-sm shadow-[0_0_10px_.1px_rgba(0,0,0,0.2)] text-Text bg-Elements"
                      href={`/${borders?.[i]}`}
                    >
                      {b}
                    </a>
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
