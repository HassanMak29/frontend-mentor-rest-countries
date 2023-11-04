import { Country } from "../types";

export default function CountryCard({ country }: { country: Country }) {
  const { population, region, capital, flags, name, ccn3 } = country;
  return (
    <a
      className="bg-Elements cursor-pointer hover:-translate-y-0.5 transition-all rounded-lg overflow-hidden shadow text-Text min-h-96"
      href={`/${ccn3}`}
    >
      <img src={flags.png} alt="flag" className="h-48 w-full" />
      <div className="flex flex-col pt-6 pb-3 px-7 gap-6 min-h-48">
        <h3 className="font-bold text-md">
          {name.official ? name.official : name.common}
        </h3>
        <div className="flex flex-col gap-2">
          <div className="text-sm flex gap-2 capitalize">
            <span className="font-semibold">population: </span>
            <p>{new Intl.NumberFormat().format(population)}</p>
          </div>
          <div className="text-sm flex gap-2 capitalize">
            <span className="font-semibold">region: </span>
            <p>{region}</p>
          </div>
          <div className="text-sm flex gap-2 capitalize">
            <span className="font-semibold">capital: </span>
            <p>{capital}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
