import React, { useEffect, useState } from "react"
import { MiniMovieModel } from "../../models/MiniMovieModel"
import './HomePage.css';
import HomeHeader from "../HomeHeader/HomeHeader";
import { MoviesList } from "../MoviesList/MoviesList";
import Route from "../common/Route";
import MovieDetailsView from "../MovieDetailsView/MovieDetailsView";

interface HomePageProps {
  moviesData: MiniMovieModel[]
}

const HomePage: React.FC<HomePageProps> = ({moviesData}): JSX.Element => {
  const [moviesToDisplay, setMoviesToDisplay] = useState<MiniMovieModel[]>(moviesData)
  const [searchInput, setSearchInput] = useState<string>("");
  const [filterSelection, setFilterSelection] = useState<string>("All");

  const recordUserGenreSelection = (genre: string) => {
    setFilterSelection(genre)
  }

  const recordUserSearchInput = (userInput: string) => {
    setSearchInput(userInput)
  }

  const displayMovies = (searchValue:string, filterValue: string) => {
    const inputValue = searchValue.trim().toLowerCase();
      const allmovies = moviesData?.filter((movie) => {
        let isGenreMatches = true;
        if(filterValue !== "All") {
          isGenreMatches = movie.genres?.includes(filterValue);
        }
        const isSearchMatches = movie.title.toLowerCase().includes(inputValue);
        return isGenreMatches && isSearchMatches;
      })

      setMoviesToDisplay(allmovies);
    }

  useEffect(() => {
    displayMovies( searchInput, filterSelection);
  }, [filterSelection, searchInput])

  return(
    <section className="home-page">
      <HomeHeader filterMovies={recordUserGenreSelection} searchMovies={recordUserSearchInput}/>
      <div className="movies-list-wrapper">
          { !moviesData?.length && (<div>No data</div>)}
          { moviesToDisplay && moviesData && 
              <MoviesList moviesList={moviesToDisplay}/>
          }
      </div>
    </section>)
}

export default HomePage;