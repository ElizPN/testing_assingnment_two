import { IOmdbResponse } from "./../models/IOmdbResponse";
import { IMovie } from "./../models/Movie";
import axios from "axios";

export const getData = async (searchText: string): Promise<IMovie[]> => {
  console.log("liza");

  return axios
    .get<IOmdbResponse>("http://omdbapi.com/?apikey=416ed51a&s=" + searchText)
    .then((response) => {
      console.log(response);

      return response.data.Search;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
};
