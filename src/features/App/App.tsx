import React, { useEffect, useState } from 'react';
import './App.css';
import { getAllMovieData } from '../../api/apiCalls';
import { MiniMovieModel } from '../../models/MiniMovieModel';

const App = () => {
//Todo: update states use
const [movies, setMovies] = useState<MiniMovieModel[]>([])
const [errors, setErrors] = useState<string>("")

//Todo: to test api call. Will be updated with new pages
useEffect(() => {
  getAllMovieData().then((data) => {
    if(data.message === "Success"){
      setMovies(data?.data)
    }
  })
  .catch((error: Error) => {
    setErrors(error.message)});
},[getAllMovieData])

  return (
    <div className="App">
    </div>
  );
}

export default App;
