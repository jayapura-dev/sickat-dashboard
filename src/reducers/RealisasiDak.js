import { 
    FETCH_REALISASI_DAK
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_REALISASI_DAK:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }