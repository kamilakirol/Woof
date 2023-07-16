import { useState, FormEvent, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import SearchContent from "./SearchContent";
import { BreedInfo } from "../types";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const breedParam = searchParams.get("breed");
  const subBreedParam = searchParams.get("subBreed");

  const getNewBreed = () =>
    (breedParam
      ? subBreedParam
        ? breedParam + " " + subBreedParam
        : breedParam
      : ""
    ).toLocaleLowerCase();
  const [searchBreed, setSearchBreed] = useState(getNewBreed());

  useEffect(() => {
    const newBreed = getNewBreed();
    setSearchBreed(newBreed);
  }, [breedParam, subBreedParam]);

  const fetchBreedInfo = async () => {
    if (!breedParam) {
      return null;
    }
    const response = await axios.get(
      `https://dog.ceo/api/breed/${getNewBreed().replace(
        " ",
        "/"
      )}/images/random`
    );
    const data = response.data;
    return data;
  };

  const breedResponse = useQuery<BreedInfo, any>(
    ["breedInfo", breedParam],
    fetchBreedInfo
  );

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ breed: searchBreed });
  };

  return (
    <div className="w-full mb-20">
      <div className=" m-10 flex flex-col items-center">
        <h2 className={`mb-12 text-base ${breedParam ? "opacity-0" : ""}`}>
          Szukaj a znajdziesz ;)
        </h2>
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row">
          <div className="relative text-center">
            <label className="bg-secondary text-primary absolute text-xs py-px px-2 rounded-sm -top-3 left-2 font-semibold">
              Wpisz rasę, której szukasz
            </label>
            <input
              type="text"
              value={searchBreed}
              onChange={(e) => setSearchBreed(e.target.value)}
              placeholder="np. Bulldog English"
              className="bg-transparent border rounded-md py-2.5 px-3 w-64 text-gray-200 placeholder:text-zinc-600"
            />
          </div>

          <button
            type="submit"
            className="bg-secondary text-gray-800 py-2.5 w-64 rounded-md text-base font-bold ml-0 mt-6 sm:w-28 sm:ml-6 sm:mt-0"
          >
            Szukaj
          </button>
        </form>
        <SearchContent
          breedResponse={breedResponse}
          searchBreed={searchBreed}
          breedParam={breedParam}
        />
      </div>
    </div>
  );
};

export default Search;
