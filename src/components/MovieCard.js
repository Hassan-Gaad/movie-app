import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = (movie) => {
    // console.log(movie);
    return (

        <div className="card col-3" >
            <img src={`https://image.tmdb.org/t/p/w500/${movie.movie.poster_path}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <Link to={`/MovieDetails/${movie.movie.id}`}>
                    <h5 className="card-title">{movie.movie.title}</h5>
                </Link>
                <p className="card-text">{movie.movie.overview}</p>
            </div>
        </div>
        
    )
}

export default MovieCard
