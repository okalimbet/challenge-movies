import { useEffect, useState } from "react";
import { getSingleMovieData } from "../../api/apiCalls";
import { MovieModel } from "../../models/MovieModel";
import "./MovieDetailsView.css";

const MovieDetailsView:React.FC = () => {
  const [movie, setMovie] = useState<MovieModel>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  useEffect(() => {
    const id = window.location.pathname.split("/id/")[1];
    setIsLoading(true);
    getSingleMovieData(id).then((data) => {
    setIsLoading(false);
    if(data.message === "success"){
      console.log("daaa", data.data)
      setMovie(data?.data);
    }
  })
  .catch((error: Error) => {
    setIsLoading(false);
    setErrors(error.message)});
    console.log("id", id)
  }, []);

  const closePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation();
      window.location.pathname = `/movies`;
  }
  return (
    <div className="movie-details-wrapper">
      <div className="movie-details" style={{display: "flex", flexDirection: "column"}}>
        <button className="close-button" onClick={(e) => closePage(e)} type="button" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="header-group">
          <span className="movie-title">{`${movie?.title || "Unknown"}`}</span>
          <span className="movie-title movie-release-date">{movie?.releaseYear || "Year is unknown"}</span>
        </div>
        
        <div className="cast">
        <span className="subtitle" style={{margin: "0.2em"}}>Cast: </span>
            {
              movie?.topCast.length && (
                movie?.topCast.map((cast) => {
                  const characterName = cast?.characterName || "Uknown";
                  const castName = cast?.name || "Uknown";

                  return <span className="names" key={castName} style={{margin: "0.2em"}}>{characterName + " - " + castName}</span>
                })
              )
            }
        </div>
        <div className="movie-info-group" style={{display: "flex", width: "100%"}}>
          <div className="movie-body">
          <span className="subtitle">Description: </span>
            <span className="movie-description">{movie?.description || "No description provided."}
            </span>
          </div>
        </div>
      </div>
    </div>)
}

export default MovieDetailsView;