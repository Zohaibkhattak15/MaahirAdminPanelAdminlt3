export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE  = 'FETCH_USER_FAILURE';
export const USER_APPLIED_FILTER = 'USER_APPLIED_FILTER';
export const USER_RESET_FILTER = 'USER_RESET_FILTER';

export const resetFilters = () => ({
    type:USER_RESET_FILTER
})

export const applyFilter = (payload) => ({
    type: USER_APPLIED_FILTER,
    payload
})

export const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST
})

export const fetchUserSucces = users => ({
    type: FETCH_USER_SUCCESS,
    payload: users  // storing the user data in the payload
})

export const fetchUserFailure = error => ({
    type: FETCH_USER_FAILURE,
    payload: error 
});