import './CardMovie.css'

export default function CardMovie({ movie }) {
  return (
    <li className='containerMovie'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        <div className='description'>
            <p>{movie.original_title}</p>
        </div>
    </li>
  )
}
