import React from "react"
import { MiniMovieModel } from "../../models/MiniMovieModel"
import './MovieCard.css';

interface MovieCardProps {
  movie: MiniMovieModel;
}
const MovieCard:React.FC<MovieCardProps> = ({movie}) => {
  return <div className="movie-card">
      <img className="movie-card-img" src={require(`../../assets/${movie.id}.jpeg`)} alt={movie.title}/>
      <span className="movie-card-title text-focus-in">
        <p>{movie.title}</p>
      </span>
    </div>
}

export default MovieCard;