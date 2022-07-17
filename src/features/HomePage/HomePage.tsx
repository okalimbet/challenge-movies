import React, { useState } from "react"
import { MiniMovieModel } from "../../models/MiniMovieModel"
import './HomePage.css';
import HomeHeader from "../HomeHeader/HomeHeader";
import { MoviesList } from "../MoviesList/MoviesList";

interface HomePageProps {
  moviesData: MiniMovieModel[]
}
const HomePage: React.FC<HomePageProps> = ({moviesData}) => {
  const [filteredMovies, setFilteredMovies] = useState<MiniMovieModel[]>(moviesData)
  const filterMovies = (genre: string) => {
    if(genre === "All") {
      setFilteredMovies(moviesData);
    } else {
      const movies = [...moviesData];
      const updatedListOfMovies = movies?.filter((movie) => {
        return movie.genres.includes(genre)
      })
      setFilteredMovies(updatedListOfMovies);  
    }
  }
  return(
    <section className="home-page">
      <HomeHeader filterMovies={filterMovies}/>
      <div className="movies-list-wrapper">
        {!moviesData?.length && <div>No data</div>}  
        {filteredMovies?.length && <MoviesList moviesList={filteredMovies}/>}
      </div>
    </section>)
}

export default HomePage;