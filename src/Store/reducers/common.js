import * as actionTypes from '../actionTypes/common';

const initialState = {
    loading:false,
    error : ''
}

export const UserReducer = ( state = initialState , action) => {
    switch(action.type) {
        case actionTypes.USER_RESET_FILTER:
            return {
                ...state,
                filteredData: []
            }
        case actionTypes.USER_APPLIED_FILTER: 
            return {
                ...state,
                filteredData: action.payload
            };

        case actionTypes.FETCH_USER_REQUEST:
            return {
                    ...state,
                    loading:true,
                    error : null

            };
            case actionTypes.FETCH_USER_SUCCESS:
                return {
                    
                    ...state,
                    loading:true,
                    users:action.payload,
    
                };
            case actionTypes.FETCH_USER_FAILURE:
                return {
                    ...state,
                    error : '',
                    loading:false,
                };
            default:
                return state;

    }
}
