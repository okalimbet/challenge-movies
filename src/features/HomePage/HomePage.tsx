import React from "react"
import { MiniMovieModel } from "../../models/MiniMovieModel"
import MovieCard from "./MovieCard"
import './HomePage.css';

interface HomePageProps {
  moviesData: MiniMovieModel[]
}
const HomePage: React.FC<HomePageProps> = ({moviesData}) => {

  return(
    <section className="home-page">
      {!moviesData?.length && <div>No data</div>}  
      {moviesData?.length && moviesData.map((singleMovie) => {
        return <MovieCard key={singleMovie.id} movie={singleMovie}/>}
      )}
    </section>)
}

export default HomePage;