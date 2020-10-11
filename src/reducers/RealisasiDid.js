import { 
    FETCH_REALISASI_DID
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_REALISASI_DID:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }