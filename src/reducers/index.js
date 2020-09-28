import { combineReducers } from 'redux';
import sumberdana from './Realisasi';
import realisasipd from './RealisasiUmum';

export default combineReducers({
    sumberdana: sumberdana,
    realisasipd: realisasipd,
});