import { combineReducers } from 'redux';
import sumberdana from './Realisasi';
import realisasipd from './RealisasiUmum';
import realisasidau from './RealisasiDau';

export default combineReducers({
    sumberdana: sumberdana,
    realisasipd: realisasipd,
    dau: realisasidau,
});