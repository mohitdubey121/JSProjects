import * as actionTypes from '../actions'
const initialState = {
    results : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results : state.results.concat({id : new Date (), value : action.result})
            }
        case actionTypes.DELETE_RESULTS:
            // const id = 2
            // const newArray = [...state.results]
            // newArray.splice(id , 1)

            const updatedArray = state.results.filter(result => result.id !== action.resultElId );  
            console.log(updatedArray);              
            return {
                ...state,
                results : updatedArray
            }
    }
    return state;
}

export default reducer