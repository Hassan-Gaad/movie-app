import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../environment/AxiosConfig';
import { getMovies } from '../store/actions/Movies';
import MovieCard from './MovieCard'
import Pagination from './Pagination';

const MovieList = ({searchValue , goHome}) => {

    // const [movies, setMovies] = useState([{}]);
    const movies = useSelector(state => state.movies)
    const dispatch = useDispatch();
    const [pageNo, setPageNo] = useState(2);
    
    
    useEffect(() => {
        setPageNo(1);
    }, [goHome])
    
    useEffect(() => {
        dispatch(getMovies({pageNo,url:"movie/popular"}));
    }, [pageNo,goHome]);
    
    useEffect(() => {
        console.log(searchValue);

        dispatch(getMovies({searchValue,url:"search/movie"}));
           
       }, [searchValue])
   
    return (
        <>
            <div className="row g-3">
                {movies.results?.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie}/>
                })}
                <Pagination pageNoPluse={()=>{setPageNo(pageNo + 1)}} pageNo={(no)=>{setPageNo(no)}} pageNoMin={()=>{pageNo-1<1?setPageNo(1): setPageNo(pageNo-1)}} />
            </div>
        </>
    )
}

export default MovieList
