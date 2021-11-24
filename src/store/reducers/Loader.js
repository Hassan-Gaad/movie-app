const INITIAL_STATE ={
    isLoad:false,
};

export  function loaderReducer(state=INITIAL_STATE,action) {
    switch (action.type) {
        case "SET_LOADER":
            return{
                ...state,
                isLoad:action.payload,
            }
    
        default:
           return state;
    }
}