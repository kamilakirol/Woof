import { NavLink } from "react-router-dom";
import { useQuery } from "react-query";
import { ListBreeds, Message } from "../types";
import axios from "axios";

const Home = () => {
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
    return <div>Ładuje się...</div>;
  }

  if (error || !data) {
    return <div>Wystąpił błąd podczas pobierania danych</div>;
  }

  const listBreeds = Object.keys(data?.message).sort() as (keyof Message)[];

  return (
    <div>
      <div className="m-10">
        <h2 className="text-title mb-6 font-bold">Lista ras</h2>
        <ol>
          {listBreeds.map((breed) => {
            if (data.message[breed].length) {
              return data.message[breed].map((subBreed) => (
                <li key={breed + subBreed} className="mb-5 capitalize">
                  <NavLink
                    to={`/search?breed=${breed}&subBreed=${subBreed}`}
                    className="text-text hover:text-active"
                  >
                    {breed} {subBreed}
                  </NavLink>
                </li>
              ));
            }

            return (
              <li key={breed} className="mb-5 capitalize">
                <NavLink
                  to={"/search?breed=" + breed}
                  className="text-text hover:text-active hover:font-bold
                    "
                >
                  {breed}
                </NavLink>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Home;
