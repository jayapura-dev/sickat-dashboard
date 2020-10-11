import { 
    FETCH_REALISASI_PAD
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_REALISASI_PAD:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }