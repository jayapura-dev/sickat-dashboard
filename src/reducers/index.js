import { combineReducers } from 'redux';
import sumberdana from './Realisasi';
import realisasiumum from './RealisasiUmum';

export default combineReducers({
    sumberdana: sumberdana,
    realisasiumum: realisasiumum,
});