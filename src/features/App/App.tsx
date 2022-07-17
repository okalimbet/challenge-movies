import React, { useEffect, useState } from 'react';
import './App.css';
import { getAllMovieData } from '../../api/apiCalls';
import { MiniMovieModel } from '../../models/MiniMovieModel';
import HomePage from '../HomePage/HomePage';
import LoadingElement from '../common/Loading';

const App: React.FC = () => {
//Todo: update states use
const [movies, setMovies] = useState<MiniMovieModel[]>([]);
const [errors, setErrors] = useState<string>("");
const [isLoading, setIsLoading] = useState<boolean>(false);
//Todo: to test api call. Will be updated with new pages
useEffect(() => {
  setIsLoading(true);
  getAllMovieData().then((data) => {
    setIsLoading(false);
    if(data.message === "Success"){
      setMovies(data?.data);
    }
  })
  .catch((error: Error) => {
    setIsLoading(false);
    setErrors(error.message)});
},[getAllMovieData])

  return (
    <div className="App">
      {isLoading && 
        <LoadingElement/>
      }
      {errors && <div>Errors!</div>}
      {!!movies.length && <HomePage moviesData={movies}/>}
    </div>
  );
}

export default App;
