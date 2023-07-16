import { NavLink } from "react-router-dom";
import { useQuery } from "react-query";
import { ListBreeds, Message } from "../types";
import axios from "axios";
import HomeItem from "./HomeItem";
import PageStatus from "./PageStatus";

const Home: React.FC = () => {
  const fetchListBreeds = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    const data = response.data;
    return data;
  };

  const { data, isLoading, error } = useQuery<ListBreeds | undefined>(
    "listBreeds",
    fetchListBreeds
  );

  if (isLoading) {
    return <PageStatus text="Ładuje się..." />;
  }

  if (error || !data) {
    return <PageStatus text="Wystąpił błąd podczas pobierania danych" />;
  }

  const listBreeds = Object.keys(data?.message).sort() as (keyof Message)[];

  return (
    <div className="m-10 flex flex-grow justify-center">
      <div className="flex flex-col w-full max-w-sm">
        <h2 className="text-title mb-6 font-bold">Lista ras</h2>
        <ol>
          {listBreeds.map((breed) => {
            if (data.message[breed].length) {
              return data.message[breed].map((subBreed) => (
                <HomeItem
                  key={breed + subBreed}
                  to={`/search?breed=${breed}&subBreed=${subBreed}`}
                  text={`${breed} ${subBreed}`}
                />
              ));
            }

            return (
              <HomeItem
                key={breed}
                to={"/search?breed=" + breed}
                text={breed}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Home;
