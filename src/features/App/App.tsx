import React, { useEffect, useState } from 'react';
import './App.css';
import { getAllMovieData } from '../../api/apiCalls';
import { MiniMovieModel } from '../../models/MiniMovieModel';
import HomePage from '../HomePage/HomePage';
import LoadingElement from '../common/Loading';
import ErrorElement from '../common/ErrorElement';

const App: React.FC = () => {

const [movies, setMovies] = useState<MiniMovieModel[]>([]);
const [errors, setErrors] = useState<string>("");
const [isLoading, setIsLoading] = useState<boolean>(false);

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
      {errors && <ErrorElement errorText={errors}/>}
      {!!movies.length && !errors && <HomePage moviesData={movies}/>}
    </div>
  );
}

export default App;
