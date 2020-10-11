import { combineReducers } from 'redux';
import sumberdana from './Realisasi';
import realisasipd from './RealisasiUmum';
import realisasidau from './RealisasiDau';
import realisasidak from './RealisasiDak';
import realisasiotsus from './RealisasiOtsus';
import realisasipad from './RealisasiPad';
import realisasidbh from './RealisasiDbh';
import realisasidid from './RealisasiDid';

export default combineReducers({
    sumberdana: sumberdana,
    realisasipd: realisasipd,
    dau: realisasidau,
    dak: realisasidak,
    otsus: realisasiotsus,
    pad: realisasipad,
    dbh: realisasidbh,
    did: realisasidid,
});