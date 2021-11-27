import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsHeart, BsFillHeartFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite ,removeFavorite } from '../store/actions/Favorite';
const MovieCard = (movie) => {
    console.log(movie);

    const [isFav, setIsFav] = useState(false)

    const favMovies = useSelector((state) => state.favorite);

    useEffect(() => {
        Array.prototype.forEach.call(favMovies, elem => { 
            if(elem.movie.id==movie.movie.id){
                console.log("object");
                setIsFav(true);

            }
        })

    }, [])

    const dispatch = useDispatch();

    const addToFavorite = () => {
        setIsFav(true);
        if(!isFav){
            dispatch(addFavorite(movie))
        }
        
    }
    const removeFromFav = () => {
        setIsFav(false);

        if(isFav){
            dispatch(removeFavorite(movie))
        }
        
    }


    // console.log(movie);
    return (

        <div className="card col-3 " >

            <div className="img-container">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.movie.poster_path}`} className="card-img-top" alt="..." />

                {isFav ? <BsFillHeartFill className="bi-heart" onClick={() => removeFromFav()} /> : <BsHeart className="bi-heart" onClick={() => addToFavorite()} />}

            </div>

            <div className="card-body">
                <Link to={`/MovieDetails/${movie.movie.id}`}>
                    <h5 className="card-title">{movie.movie.title}</h5>
                </Link>
                <p className="card-text text-truncate text-wrap" style={{height:'100px'}}>{movie.movie.overview}</p>
            </div>
        </div>

    )
}

export default MovieCard
