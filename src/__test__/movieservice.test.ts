import axios from "axios";
import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";

jest.mock("axios");

describe("getData", () => {
  describe("when API call is successful", () => {
    it("should return mobies list", async () => {
        const response = {
          data: {
            Response: "True",
            Search: [
              {
                Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
                Year: "2003",
                imdbID: "tt0325980",
                Type: "movie",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
              },
              {
                Title: "Black Panther",
                Year: "2018",
                imdbID: "tt1825683",
                Type: "movie",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
              },
              {
                Title: "Black Swan",
                Year: "2010",
                imdbID: "tt0947798",
                Type: "movie",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg",
              },
            ],
            totalResults: "6725",
          },
        };


      (axios.get as jest.Mock).mockResolvedValueOnce(response);

   const result = await getData("Black");

    expect(axios.get).toHaveBeenCalledWith(
    "http://omdbapi.com/?apikey=416ed51a&s=Black"
   );
  expect(result).toEqual(response.data.Search);
    });
  });

  describe("when API call fails", () => {
    it("should return empty movie list", () => {
      // ...
    });
  });
});
