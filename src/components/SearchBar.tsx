import { forwardRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { useSearchFilter } from "../context/searchFilterContext/useSearchFilter";

export default forwardRef(function SearchBar(
  {
    regions,
  }: {
    regions: string[];
  },
  ref: React.ForwardedRef<HTMLDivElement | null>,
) {
  const { filter, filterFunc, search, getSearchValue, region, getRegion } =
    useSearchFilter();

  return (
    <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-0">
      <div className="relative flex items-center">
        <AiOutlineSearch className="absolute left-5 text-xl text-InputText" />
        <input
          type="text"
          className="w-96 rounded py-3 pl-14 pr-4 text-InputText shadow-sm outline-Input"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => {
            getSearchValue((e.target as HTMLInputElement).value);
          }}
        />
      </div>
      <div className="relative flex flex-col gap-2 text-sm">
        <div
          className="absolute inset-0 z-0"
          onClick={() => {
            filterFunc(false);
          }}
        ></div>
        <div
          ref={ref}
          className="z-10 flex w-52 cursor-pointer items-center justify-between rounded bg-Elements px-5 py-4 text-Text shadow"
          onClick={() => {
            filterFunc((filter) => !filter);
          }}
        >
          <span className="text-Text">
            {region ? region : "Filter by region..."}
          </span>
          <BiChevronDown />
        </div>
        <div
          className={`${
            filter ? "" : "hidden"
          } absolute top-14 w-52 rounded bg-Elements px-5 py-3 text-Text shadow`}
        >
          <ul className="flex max-h-32 flex-col gap-3 overflow-scroll">
            <li
              key={"all"}
              className="cursor-pointer capitalize hover:text-InputText"
              onClick={() => {
                filterFunc(false);
                getRegion("");
              }}
            >
              All
            </li>
            {regions.map((region: string) => (
              <li
                key={region}
                className="cursor-pointer capitalize hover:text-InputText"
                onClick={() => {
                  filterFunc(false);
                  getRegion(region);
                }}
              >
                {region}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});
