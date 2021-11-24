import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'

const Favorite = () => {

    const favorite = useSelector(state => state.favorite)
    return (
        <div className="row g-3">
            {favorite?.map((movie) => {
                    return <MovieCard key={movie.movie.id} movie={movie.movie}/>
                })}
                
        </div>
    )
}

export default Favorite
