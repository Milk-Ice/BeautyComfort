import * as actionTypes from './constant'

const initialState = {
    currentPage: 0,
    roomList: [],
    totalCount: 0,

    isLoading: false
}
function reducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case actionTypes.CHANGE_ROOMLIST:
            return {...state, roomList: action.roomList}
        case actionTypes.CHANGE_TOTAL_COUNT: 
            return { ...state, totalCount: action.totalCount}
        case actionTypes.CHANGE_IS_LOADING:
            return { ...state, isLoading: action.isLoading}
        default: 
            return state
    }
}
export default reducer