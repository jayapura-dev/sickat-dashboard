import { 
    FETCH_REALISASIUMUM
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_REALISASIUMUM:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }