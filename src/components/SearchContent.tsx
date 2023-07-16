import { UseQueryResult } from "react-query";
import { BreedInfo } from "../types";
import FrenchBulldogImage from "../assets/frenchBulldog.jpg";
import PageStatus from "./PageStatus";
import PetIcon from "./PetIcon";

type Props = {
  breedResponse: UseQueryResult<BreedInfo, any>;
  searchBreed: string;
  breedParam: string | null;
};

const SearchContent: React.FC<Props> = ({
  breedResponse,
  searchBreed,
  breedParam,
}) => {
  const { data, isLoading, error } = breedResponse;

  if (isLoading) {
    return <PageStatus className="-mt-28" text="Ładuje się..." />;
  } else if (error && error.response.status !== 404) {
    console.log({ error });
    return (
      <PageStatus
        className="-mt-28"
        text="Wystąpił błąd podczas pobierania danych"
      />
    );
  } else if (data) {
    return (
      <div className="flex flex-col items-center">
        <div className="mt-10 rounded-full max-w-xs h-60 w-60 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={data.message}
            alt={searchBreed}
          />
        </div>
        <div className="mt-10">
          <h2 className="capitalize text-gray-200 font-semibold">
            {searchBreed}
          </h2>
          <p className="max-w-md mt-6">
            Ten pies to wierny i przyjacielski czworonóg, który świetnie czuje
            się w roli rodzinnego towarzysza. Dobrze dogaduje się z dziećmi,
            uwielbia pieszczoty i wspólne zabawy. Jest łatwy w prowadzeniu, choć
            bywa uparty. Sprawdzi się zarówno w małym mieszkaniu jak i w domu z
            ogrodem. Wysokość w kłębie 30 i 35 cm, masa ciała 22-25 kg. Sierść
            krótka, delikatna, lśniąca, umaszczenie płowe, pręgowate lub
            łaciate. Charakter czujny, śmiały, oddany, odważny, łagodny, czasem
            uparty. W zależności od dnia pokazuje różne oblicza swojej natury.
          </p>
        </div>
      </div>
    );
  } else {
    if (breedParam) {
      return (
        <div className="flex flex-col items-center">
          <div className="mt-10 rounded-full w-60 h-60 bg-text flex items-center justify-center">
            <PetIcon
              className="bg-currentColor text-title"
              height="120"
              width="120"
            />
          </div>
          <p className="w-56 mt-6 text-center">
            Ajajaj! Tej rasy nie ma jeszcze w naszej bazie.Poszukaj innej.
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center">
          <div className="mt-10 rounded-full max-w-xs h-60 w-60 overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={FrenchBulldogImage}
              alt="french bulldog"
            />
          </div>

          <p className="w-52 mt-6 text-center">
            Tu wyświetlimy informacje o interesującym Cię pupilu
          </p>
        </div>
      );
    }
  }
};

export default SearchContent;
