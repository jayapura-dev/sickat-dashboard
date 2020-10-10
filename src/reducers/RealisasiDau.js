import { 
    FETCH_REALISASI_DAU
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_REALISASI_DAU:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }