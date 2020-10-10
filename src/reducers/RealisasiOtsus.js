import { 
    FETCH_REALISASI_OTSUS
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_REALISASI_OTSUS:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }