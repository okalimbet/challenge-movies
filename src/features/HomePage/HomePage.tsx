import React from "react"
import { MiniMovieModel } from "../../models/MiniMovieModel"

interface HomePageProps {
  moviesData: MiniMovieModel[]
}
const HomePage: React.FC<HomePageProps> = ({moviesData}) => {

  return<>HomePage</>
}

export default HomePage;