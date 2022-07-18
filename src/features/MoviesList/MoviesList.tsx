import { MiniMovieModel } from "../../models/MiniMovieModel";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesList.css";
interface MoviesListProps {
  moviesList: MiniMovieModel[];
}

export const MoviesList: React.FC<MoviesListProps> = ({moviesList}): JSX.Element => {
  const noMoviesFoundElement = () => {
    return <div style={{color: "white", marginTop: "3em"}}>
    <p>No movies matching your criteria were found.</p>
    </div>
  }
  return <div className="movies-list">
      {moviesList?.length ? moviesList?.map((singleMovie: MiniMovieModel) => {
          return <MovieCard key={singleMovie.id} movie={singleMovie}/>
        }) : noMoviesFoundElement()}
    </div>
}