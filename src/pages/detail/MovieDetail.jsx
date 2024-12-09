import React, { useEffect, useState } from 'react'
import { IoEarthSharp, IoTimer } from "react-icons/io5";
import BasicBtn from '../../components/buttons/BasicBtn';
import { useParams } from 'react-router-dom';
import { movieServices } from '../../services/MovieServices';
import { CiStar } from 'react-icons/ci';
import { MdOutlineBrowserUpdated } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';
import { FaEarthEurope } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { addFav } from '../../redux/actions/fav.action';
function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    movieServices.getMovieDetail(id)
      .then((data) => setMovie(data))
  }, [])

  const changeLike = (param) => {
    dispatch(addFav(param))
  }

  console.log(movie);
  return (
    <div className='flex flex-col gap-5 w-[90%] m-auto md:flex-row'>
      <div>
        <img src= {movie.Poster} />
      </div>
      <div className='flex flex-col justify-between'>
        <h1 className='text-2xl font-bold'>{movie.Title}</h1>
        <ul className='flex flex-col gap-5 md:flex-row'>
          <li className='flex items-center gap-1 text-lg'><CiStar /> {movie.imdbRating}</li>
          <li className='flex items-center gap-1 text-lg'><IoTimer /> {movie.Runtime}</li>
          <li className='flex items-center gap-1 text-lg'><MdOutlineBrowserUpdated /> {movie.Year}</li>
          <li className='flex items-center gap-1 text-lg'><BiCategory /> {movie.Genre}</li>
          <li className='flex items-center gap-1 text-lg'><FaEarthEurope /> {movie.Country}</li>
        </ul>
        <p>{movie.Plot}</p>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-lg font-bold'>Director</h2>
            <p>{movie.Director}</p>
          </div>
          <div>
            <h2 className='text-lg font-bold'>Actors</h2>
            <p>{movie.Actors}</p>
          </div>
        </div>
        <BasicBtn title={"Add List"} func={(e) => changeLike({ Title: movie.Title, imdbID: movie.imdbID })} />
      </div>
    </div>
  )
}

export default MovieDetail