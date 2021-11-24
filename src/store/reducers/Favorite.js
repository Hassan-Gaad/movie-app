const INITIAL_STATE=[];

export function favoriteReducer(state=INITIAL_STATE,action) {
    switch (action.type) {
        case "ADD_FAVORITE":
            return [...state,action.payload]

        case "REMOVE_FAVORITE":

        return [...state].filter((val)=>{
           if(val.movie.id!==action.payload.movie.id){
               return val;
           }
        })

        default:
            return[...state]
    }
    
}

