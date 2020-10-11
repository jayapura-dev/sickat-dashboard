import { 
    FETCH_REALISASI_DBH
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_REALISASI_DBH:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }