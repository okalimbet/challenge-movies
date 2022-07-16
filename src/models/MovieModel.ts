import { CastModel } from "./CastModel";

export interface MovieModel {
  id: string;
  title: string;
  description: string;
  duration: number;
  releaseDate: string;
  releaseYear: number;
  moods: string[];
  topCast: CastModel[];
  genres: string[];
}

//EXAMPLE
// {
//   "message": "success",
//   "data": {
//       "id": "SP015666320000",
//       "title": "Land",
//       "description": "A local hunter brings a grieving lawyer back from the brink of death after she retreats to the harsh wilderness of the Rockies.",
//       "duration": 5340,
//       "releaseDate": "2021-01-30",
//       "releaseYear": 2021,
//       "moods": [],
//       "topCast": [
//           {
//               "name": "Robin Wright",
//               "characterName": "Edee"
//           },
//           {
//               "name": "Demián Bichir",
//               "characterName": "Miguel"
//           },
//       ],
//       "genres": [
//           "Drama"
//       ]
//   }
// }