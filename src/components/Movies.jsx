import React, { useEffect, useState } from 'react'

import CardMovie from './CardMovie';
import 'react-loading-skeleton/dist/skeleton.css'

import './Movies.css'
import CardSkeleton from './CardSkeleton';


export default function Movies() {

    const [movies, setMovies] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            async function getMovie() {
                try {
                    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6171165465a508a6fa13009051243ab7`);
                    const data = await res.json();
                    const result = data.results;
                    const threeMovies = result.slice(0, 6);

                    setMovies(threeMovies)
                    setRemoveLoading(true)
                } catch (error) {
                    console.log('Erro ao buscar dados da API', error)
                }
            }
            getMovie()
        }, 1000)
    }, [])

    return (
        <div className='containerMovies'>
            <ul className='listMovies'>
                {!removeLoading && <CardSkeleton cards={6}/>}
                {movies.length > 0 && movies.map((movie) => {
                    return (
                        <CardMovie key={movie.id} movie={movie} />
                    )
                })}
            </ul>
        </div>
    )
}
