import { MiniMovieModel } from "./models/MiniMovieModel";
import { MovieModel } from "./models/MovieModel";

//API Response models
interface Response {
  message: string;
}
interface MoviesListResponse extends Response {
  data:  MiniMovieModel[];
}
interface SingleMovieResponse extends Response {
  data:  MovieModel;
}

//ENV variable
const configValue = process.env.REACT_APP_API_KEY as string;

//General api call
const fetchData = async<T>(url: string): Promise<T> => {
  return fetch(url,{
    method: "GET",
    headers: {
      "Authorization": configValue,
      },
  })
  .then(response => {
    if (!response.ok) {
      switch(response.status) {
        case(401): 
          throw new Error("UNAUTHORIZED");
        case(429):
          throw new Error("REQUEST_LIMIT");
        default:
          throw new Error("UNRECOVERABLE");
      }

    }
    return response.json().then(data => data as T);
  })
  .catch((error: Error) => {
    throw error;
  });
}

//Main path
const MOVIES_URL = "https://code-challenge.spectrumtoolbox.com/api/movies";

//Movies call
export const getAllMovieData = async() => {
  return fetchData<MoviesListResponse>(MOVIES_URL)
}
//Single Movie call
export const getSingleMovieData = async (id: string) => {
  return fetchData<SingleMovieResponse>(`${MOVIES_URL}/${id}`)
};