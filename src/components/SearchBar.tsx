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
  ref: React.ForwardedRef<HTMLDivElement | null>
) {
  const { filter, filterFunc, search, getSearchValue, region, getRegion } =
    useSearchFilter();

  return (
    <div className="flex md:flex-row flex-col md:items-center gap-3 md:gap-0 justify-between mb-6">
      <div className="flex items-center relative">
        <AiOutlineSearch className="text-InputText text-xl absolute left-5" />
        <input
          type="text"
          className="pl-14 pr-4 py-3 w-96 rounded shadow-sm text-InputText outline-Input"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => {
            getSearchValue((e.target as HTMLInputElement).value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2 relative text-sm">
        <div
          className="absolute inset-0 z-0"
          onClick={() => {
            filterFunc(false);
          }}
        ></div>
        <div
          ref={ref}
          className="w-52 py-4 px-5 rounded cursor-pointer shadow flex items-center text-Text justify-between bg-Elements z-10"
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
          } absolute top-14 w-52 py-3 px-5 rounded bg-Elements shadow text-Text`}
        >
          <ul className="flex flex-col gap-3 max-h-32 overflow-scroll">
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
