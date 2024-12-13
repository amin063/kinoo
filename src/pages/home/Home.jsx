import { useSelector } from 'react-redux';
import MovieCards from '../../components/cards/MovieCards'
import Register from '../auth/Register';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
 






  return (
    <div className='w-[75%] m-auto max-w-[1120px]'>
      <MovieCards />
    </div>
  )
}

export default Home