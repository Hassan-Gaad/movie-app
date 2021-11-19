import React, { useEffect, useState } from 'react'
import axiosInstance from '../environment/AxiosConfig';
import MovieCard from './MovieCard'
import Pagination from './Pagination';

const MovieList = ({searchValue , goHome}) => {

    const [movies, setMovies] = useState([{}]);
    const [pageNo, setPageNo] = useState(2);

    console.log(goHome);
    
    useEffect(() => {
        axiosInstance
            .get("movie/popular", {
                params: {
                    page: pageNo,
                }
            })
            .then((res) => {
                setMovies(res.data)
                console.log(res.data);
            })
            .catch((err) => console.log(err));

    }, [pageNo,goHome]);
    
    useEffect(() => {
        console.log(searchValue);
           axiosInstance
               .get("search/movie", {
                   params: {
                       query: searchValue,
                   }
               })
               .then((res) => {
                    setMovies(res.data)
                   console.log(res.data);
               })
               .catch((err) => console.log(err));
   
       }, [searchValue])
   
    return (
        <>
            <div className="row g-3">
                {movies.results?.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />
                })}
                <Pagination pageNoPluse={()=>{setPageNo(pageNo + 1)}} pageNo={(no)=>{setPageNo(no)}} pageNoMin={()=>{pageNo-1<1?setPageNo(1): setPageNo(pageNo-1)}} />
            </div>
        </>
    )
}

export default MovieList
