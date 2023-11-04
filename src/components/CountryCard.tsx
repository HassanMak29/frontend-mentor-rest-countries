import { Country } from "../types";

export default function CountryCard({ country }: { country: Country }) {
  const { population, region, capital, flags, name, ccn3 } = country;
  return (
    <a
      className="min-h-96 cursor-pointer overflow-hidden rounded-lg bg-Elements text-Text shadow transition-all hover:-translate-y-0.5"
      href={`/${ccn3}`}
    >
      <img src={flags.png} alt="flag" className="h-48 w-full" />
      <div className="min-h-48 flex flex-col gap-6 px-7 pb-3 pt-6">
        <h3 className="text-md font-bold">
          {name.official ? name.official : name.common}
        </h3>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 text-sm capitalize">
            <span className="font-semibold">population: </span>
            <p>{new Intl.NumberFormat().format(population)}</p>
          </div>
          <div className="flex gap-2 text-sm capitalize">
            <span className="font-semibold">region: </span>
            <p>{region}</p>
          </div>
          <div className="flex gap-2 text-sm capitalize">
            <span className="font-semibold">capital: </span>
            <p>{capital}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
