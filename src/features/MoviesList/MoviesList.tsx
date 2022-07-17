import { MiniMovieModel } from "../../models/MiniMovieModel";
import MovieCard from "../MovieCard/MovieCard";

interface MoviesListProps {
  moviesList: MiniMovieModel[];
}

export const MoviesList: React.FC<MoviesListProps> = ({moviesList}) => {
  return <div className="movies-list"  style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
      {moviesList?.map((singleMovie: MiniMovieModel) => {
          return <MovieCard key={singleMovie.id} movie={singleMovie}/>
        })}
    </div>
}