import React from 'react'
import MovieCard from '../MovieCard.js/MovieCard'

const MovieList = ({movies}) => {
  return (
    <div>
    {movies.map((movie)=>{
        return <MovieCard movie={movie}  />
    })}
    </div>
  )
}

export default MovieList