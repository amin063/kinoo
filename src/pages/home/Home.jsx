import MovieCards from '../../components/cards/MovieCards'

function Home() {
  if (!localStorage.getItem("userId")) {
    const userId = Math.random();
    localStorage.setItem("userId", userId);
  }
  return (
    <div className='w-[75%] m-auto max-w-[1120px]'>
      <MovieCards />
    </div>
  )
}

export default Home