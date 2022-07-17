import { MiniMovieModel } from "../../models/MiniMovieModel";
import MovieCard from "../MovieCard/MovieCard";

interface MoviesListProps {
  moviesList: MiniMovieModel[];
}

export const MoviesList: React.FC<MoviesListProps> = ({moviesList}) => {
  const noMoviesFoundElement = () => {
    return <div style={{color: "white", marginTop: "3em"}}>
    <p>No movies matching your criteria were found.</p>
    </div>
  }
  return <div className="movies-list"  style={{display: "flex", flexWrap: "wrap", alignContent: "center", justifyContent: "center"}}>
      {moviesList?.length ? moviesList?.map((singleMovie: MiniMovieModel) => {
          return <MovieCard key={singleMovie.id} movie={singleMovie}/>
        }) : noMoviesFoundElement()}
    </div>
}