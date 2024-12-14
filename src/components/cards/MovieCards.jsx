import React, { useEffect, useState } from 'react'
import MovieCard from '../card/MovieCard'
import { movieServices } from '../../services/MovieServices'
import { useSelector } from 'react-redux'

function MovieCards() {
  const [movies, setMovies] = useState([])
  const s = useSelector((state) => state.inputValue)

  useEffect(() => {
    movieServices.getMovie(s).then(data => setMovies(data.Search))
  }, [s])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 '>
      {
        movies?.length ?
          movies?.map((movie) => <MovieCard key={movie.imdbID} {...movie} />)
          : <div className='font-bold text-red-600 text-2xl'>Movie Not Found</div>
      }
    </div>
  )
}

export default MovieCards