import { 
    FETCH_REALISASIPD
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_REALISASIPD:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }