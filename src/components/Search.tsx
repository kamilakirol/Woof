import { useState, FormEvent, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import FrenchBulldogImage from "../assets/frenchBulldog.jpg";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const breedParam = searchParams.get("breed");
  const subBreedParam = searchParams.get("subBreed");

  const getNewBreed = () =>
    breedParam
      ? subBreedParam
        ? breedParam + " " + subBreedParam
        : breedParam
      : "";
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

  const { data, isLoading, error } = useQuery(
    ["breedInfo", breedParam],
    fetchBreedInfo
  );
  let contentBreed = null;

  if (isLoading) {
    contentBreed = <div>Ładuje się...</div>;
  }

  if (error) {
    contentBreed = <div>Wystąpił błąd podczas pobierania danych</div>;
  }
  if (data) {
    contentBreed = (
      <div className="flex flex-col items-center">
        <div className="mt-10 rounded-full max-w-xs h-80 overflow-hidden">
          <img src={data.message} alt={searchBreed} />
        </div>

        <p className="w-52 mt-6 text-center">
          Ten pies to wierny i przyjacielski czworonóg, który świetnie czuje się
          w roli rodzinnego towarzysza. Dobrze dogaduje się z dziećmi, uwielbia
          pieszczoty i wspólne zabawy. Jest łatwy w prowadzeniu, choć bywa
          uparty. Sprawdzi się zarówno w małym mieszkaniu jak i w domu z
          ogrodem. Wysokość w kłębie 30 i 35 cm, masa ciała 22-25 kg. Sierść
          krótka, delikatna, lśniąca, umaszczenie płowe, pręgowate lub łaciate.
          Charakter czujny, śmiały, oddany, odważny, łagodny, czasem uparty. W
          zależności od dnia pokazuje różne oblicza swojej natury.
        </p>
      </div>
    );
  } else {
    if (breedParam) {
      contentBreed = (
        <div className="flex flex-col items-center">
          <div className="mt-10 rounded-full w-80 h-80 bg-text relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 100 100"
              className="bg-currentColor text-title absolute top-14 left-14"
              height="170"
              width="170"
            >
              <g transform="translate(0,-952.36218)">
                <path
                  d="m 39.851547,990.49063 c -2.7001,0 -4.91,2.20988 -4.91,4.91 0,2.70013 2.2099,4.90997 4.91,4.90997 2.7001,0 4.91,-2.20984 4.91,-4.90997 0,-2.70012 -2.2099,-4.91 -4.91,-4.91 z m 0,2 c 1.6199,0 2.91,1.29013 2.91,2.91 0,1.61988 -1.2901,2.91 -2.91,2.91 -1.6199,0 -2.91,-1.29012 -2.91,-2.91 0,-1.61987 1.2901,-2.91 2.91,-2.91 z"
                  fill="currentColor"
                  fillOpacity="2"
                  fillRule="evenodd"
                  stroke="none"
                  visibility="visible"
                  display="inline"
                  overflow="visible"
                ></path>
                <path
                  d="m 59.381547,990.42063 c -2.7001,0 -4.91,2.20988 -4.91,4.91 0,2.70013 2.2099,4.90997 4.91,4.90997 2.7001,0 4.91,-2.20984 4.91,-4.90997 0,-2.70012 -2.2099,-4.91 -4.91,-4.91 z m 0,2 c 1.6199,0 2.91,1.29013 2.91,2.91 0,1.61988 -1.2901,2.91 -2.91,2.91 -1.6199,0 -2.91,-1.29012 -2.91,-2.91 0,-1.61987 1.2901,-2.91 2.91,-2.91 z"
                  fill="currentColor"
                  fillOpacity="1"
                  fillRule="evenodd"
                  stroke="none"
                  visibility="visible"
                  display="inline"
                  overflow="visible"
                ></path>
                <path
                  d="m 49.531247,971.01876 c -5.6139,-0.0375 -11.1729,1.47296 -15.9688,4.59375 -6.5147,0.96747 -11.7796,3.43469 -15.625,6.03125 -3.8505,2.60015 -6.2405,5.27001 -7.2187,7 -1.9893002,2.83792 -3.8216007,8.04982 -3.8125007,13.65624 0.5284,8.559 7.4722007,22.9053 15.0312007,11.0313 0.4611,-0.8174 0.8857,-1.7182 1.2813,-2.6875 1.5907,5.2552 4.6368,10.4603 8.6563,14.625 4.7744,4.9469 10.9659,8.4375 17.7812,8.4375 6.8292,0 12.9039,-3.3732 17.6562,-8.2813 4.1028,-4.2372 7.2581,-9.6479 9.1563,-15.1562 0.7121,1.7367 1.5007,3.255 2.4375,4.5 7.6814,9.5818 14.0934,-6.3644 14.1875,-12.4688 0.01,-5.60213 -1.825,-10.81684 -3.8125,-13.65624 -1.0009,-1.77062 -3.5239,-4.39652 -7.5,-6.96875 -3.9843,-2.57758 -9.3828,-5.00698 -15.9375,-5.96875 -5.054,-3.03958 -10.7127,-4.65009 -16.3125,-4.6875 z m 0,2 c 5.2478,0.0365 10.5522,1.53292 15.3125,4.40625 5.4146,8.76226 7.6048,20.99407 10.5,29.71879 -1.6407,6.0662 -4.9887,12.2481 -9.4687,16.875 -4.1848,4.3218 -9.3124,7.287 -15,7.6562 l 0,-9.5937 c 1.6644,-0.5482 3.0526,-1.261 4.0937,-2.2813 1.2422,-1.2173 1.9222,-2.8509 2,-4.8125 0.021,-0.3563 -0.166,-0.7172 -0.4687,-0.9062 -1.8502,-1.1 -4.2426,-1.6403 -6.625,-1.6563 -2.3826,-0.016 -4.7827,0.5031 -6.625,1.6875 -0.2644,0.1798 -0.433,0.4928 -0.4376,0.8125 -0.027,1.9535 0.5314,3.6075 1.6876,4.8438 1.0618,1.1353 2.551,1.9 4.375,2.4687 l 0,9.4375 c -5.8324,-0.2581 -11.2597,-3.3231 -15.5626,-7.7812 -4.498,-4.6606 -7.7379,-10.8164 -8.875,-16.5938 -0.01,-0.021 -0.02,-0.042 -0.031,-0.062 0.4464,-1.4086 0.8909,-2.8735 1.3125,-4.4375 2.202,-8.16893 4.3592,-18.10654 8.9375,-25.49999 4.4489,-2.89129 9.6345,-4.3177 14.875,-4.28125 z m -17.5625,4.90625 c -4.1696,7.55804 -6.1603,16.82295 -8.1875,24.34379 -1.0995,4.0789 -2.2239,7.6654 -3.5938,10.0937 -5.5266,9.3325 -11.2115002,-5.2256 -11.2812002,-10.0625 -0.01,-5.17602 1.8283002,-10.24162 3.4688002,-12.56249 0.023,-0.0301 0.043,-0.0614 0.062,-0.0937 0.6611,-1.19163 2.9541,-3.86495 6.625,-6.34375 3.2536,-2.197 7.5888,-4.30231 12.9063,-5.375 z m 35.5625,0.0937 c 5.3469,1.07266 9.7886,3.16509 13.1562,5.34375 3.7993,2.45788 6.2378,5.13244 6.875,6.28125 0.019,0.0324 0.04,0.0637 0.063,0.0937 1.6403,2.32087 3.477,7.38647 3.4687,12.56249 -0.8689,5.3738 -4.8168,18.7362 -10.5625,11.2813 -1.2151,-1.6149 -2.3014,-4.0702 -3.2812,-7 -2.6586,-7.97583 -4.6925,-19.48908 -9.7188,-28.56254 z m -17.6875,36.40629 c 1.8353,0.012 3.7027,0.4189 5.0937,1.0938 -0.1482,1.2364 -0.6103,2.1256 -1.375,2.875 -2.4701,2.088 -5.3075,2.4046 -7.5937,0.031 -0.6963,-0.7446 -1.0873,-1.6361 -1.1563,-2.9063 1.3536,-0.7108 3.1732,-1.1062 5.0313,-1.0937 z"
                  fill="currentColor"
                  fillOpacity="1"
                  fillRule="evenodd"
                  stroke="none"
                  visibility="visible"
                  display="inline"
                  overflow="visible"
                ></path>
              </g>
            </svg>
          </div>
          <p className="w-56 mt-6 text-center">
            Ajajaj! Tej rasy nie ma jeszcze w naszej bazie.Poszukaj innej.
          </p>
        </div>
      );
    } else {
      contentBreed = (
        <div className="flex flex-col items-center">
          <div className="mt-10 rounded-full max-w-xs h-80 overflow-hidden">
            <img src={FrenchBulldogImage} alt="french bulldog" />
          </div>

          <p className="w-52 mt-6 text-center">
            Tutaj wyświetlimy informacje o interesującym Cię pupilu
          </p>
        </div>
      );
    }
  }

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ breed: searchBreed });
  };

  return (
    <div className="w-full mb-20">
      <div className=" m-10 flex flex-col items-center">
        <h2 className="font-bold mb-12 ">Szukaj a znajdziesz ;)</h2>
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row">
          <div className="relative text-center">
            <label className="bg-secondary text-primary absolute text-xs py-px px-2 rounded-sm -top-3 left-2 font-bold">
              Wpisz rasę, której szukasz
            </label>
            <input
              type="text"
              value={searchBreed}
              onChange={(e) => setSearchBreed(e.target.value)}
              placeholder="np.Buldog angielski"
              className="bg-transparent border rounded-md py-2.5 px-3 w-64"
            />
          </div>

          <button
            type="submit"
            className="bg-secondary text-primary py-2.5 w-64 rounded-md font-bold ml-0 mt-6 sm:w-28 sm:ml-6 sm:mt-0"
          >
            Szukaj
          </button>
        </form>
        {contentBreed}
      </div>
    </div>
  );
};

export default Search;
