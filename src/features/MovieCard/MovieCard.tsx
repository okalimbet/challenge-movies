import React from "react"
import { MiniMovieModel } from "../../models/MiniMovieModel"
import './MovieCard.css';

interface MovieCardProps {
  movie: MiniMovieModel;
  handleCardClick: () => void;
}
const MovieCard:React.FC<MovieCardProps> = ({movie, handleCardClick}): JSX.Element => {

  const validateImageAsset = (path: string) => {
    try {
     return require(`../../assets/${path}.jpeg`);
    } catch (err) {
     return null;
    }
  };
  return (
    <div className="movie-card" onClick={handleCardClick}>
      {validateImageAsset(movie.id) ?
        <img className="movie-card-img" src={require(`../../assets/${movie.id}.jpeg`)} alt={movie.title}/>
          : <span className="movie-card-img default-image">No Image</span>}
      <span className="movie-card-title text-focus-in">
        <p>{movie.title}</p>
      </span>
    </div>)
}

export default MovieCard;