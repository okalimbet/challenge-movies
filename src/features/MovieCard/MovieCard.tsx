import React from "react"
import { MiniMovieModel } from "../../models/MiniMovieModel"
import Link from "../common/Link";
import './MovieCard.css';

interface MovieCardProps {
  movie: MiniMovieModel;
}

const MovieCard:React.FC<MovieCardProps> = ({movie}): JSX.Element => {

  const validateImageAsset = (path: string) => {
    try {
     return require(`../../assets/${path}.jpeg`);
    } catch (err) {
     return null;
    }
  };

  return (
    <Link className="movie-details-link" ariaLabel={`Read more about ${movie.title}`} href={`/movie/id/${movie.id}`}>
      <div className="movie-card" onClick={()=>{}}>
          <img className="movie-card-img" src={
            validateImageAsset(movie.id) ? require(`../../assets/${movie.id}.jpeg`) 
            : require(`../../assets/defaultImage.png`)} 
            alt={movie.title}
          />
        <span className="movie-card-title text-focus-in">
          <p>{movie.title}</p>
        </span>
      </div>
    </Link>
    )
}

export default MovieCard;