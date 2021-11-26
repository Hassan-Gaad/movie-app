import axiosInstance from "../../environment/AxiosConfig";

export const getMovies=({pageNo,searchValue,url})=>{
    return (dispatch)=>{
        axiosInstance
        
            .get(url, {
                params: {
                    page: pageNo?pageNo:'',
                    query: searchValue,
                }
            })
            .then((res) => {
                dispatch({
                    type:'GET_MOVIES',
                    payload:res.data
                })
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }
}