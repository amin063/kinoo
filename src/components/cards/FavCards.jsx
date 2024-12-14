import { useEffect, useState } from 'react'
import FavCard from '../card/FavCard'
import { favServices } from '../../services/FavServices'
import { useParams } from 'react-router-dom'

function FavCards() {
  const [fav, setFav] = useState([])
  const { id } = useParams()
  useEffect(() => {
    favServices.getFavList(id)
    .then((data) => setFav(data.movieInfo))
    .catch((error) => console.log(error))
  }, [])

  console.log(fav);


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 '>      
      {
        fav.map((info) => <FavCard key={info.imdbId} {...info} />)
      }

    </div>
  )
}

export default FavCards