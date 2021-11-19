import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axiosInstance from '../environment/AxiosConfig';

const MovieDetails = () => {
    const [movie, setMovie] = useState();
    const params = useParams();
    console.log(params)

    useEffect(() => {
        axiosInstance.get(`movie/${params.id}`)
            .then((res) => {
                setMovie(res.data);
                console.log(res.data);
            }).catch((err => {
                console.log(err);
            }))
    }, [])

    return (
        <div className="card col-3" >
            <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <Link to={`/MovieDetails/${movie?.id}`}>
                    <h5 className="card-title">{movie?.title}</h5>
                </Link>
                <p className="card-text">{movie?.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetails
