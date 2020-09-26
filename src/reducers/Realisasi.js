import { 
    FETCH_SUMBERDANA,
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_SUMBERDANA:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }