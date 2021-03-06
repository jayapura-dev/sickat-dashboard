import sickat from '../api/sickat';
import {
    FETCH_SUMBERDANA,
    FETCH_REALISASIPD,
    FETCH_REALISASI_DAU,
    FETCH_REALISASI_DAK,
    FETCH_REALISASI_OTSUS,
    FETCH_REALISASI_PAD,
    FETCH_REALISASI_DBH,
    FETCH_REALISASI_DID,
} from './types';

export const fetchSumberdana = () => async dispatch => {
    const response = await sickat.get('/sumberdana/');

    dispatch({ type: FETCH_SUMBERDANA, payload: response.data.result });
}

export const fetchRealisasiPd = () => async dispatch => {
    const response = await sickat.get('/realisasipd/');

    dispatch({ type: FETCH_REALISASIPD, payload: response.data.result });
}

export const fetchRealisasiDau = () => async dispatch => {
    const response = await sickat.get('/realisasidau/');

    dispatch({ type: FETCH_REALISASI_DAU, payload: response.data.result });
}

export const fetchRealisasiDak = () => async dispatch => {
    const response = await sickat.get('/realisasidak/');

    dispatch({ type: FETCH_REALISASI_DAK, payload: response.data.result });
}

export const fetchRealisasiOtsus = () => async dispatch => {
    const response = await sickat.get('/realisasiotsus/');

    dispatch({ type: FETCH_REALISASI_OTSUS, payload: response.data.result });
}

export const fetchRealisasiPad = () => async dispatch => {
    const response = await sickat.get('/realisasipad/');

    dispatch({ type: FETCH_REALISASI_PAD, payload: response.data.result });
}

export const fetchRealisasiDbh = () => async dispatch => {
    const response = await sickat.get('/realisasidbh/');

    dispatch({ type: FETCH_REALISASI_DBH, payload: response.data.result });
}

export const fetchRealisasiDid = () => async dispatch => {
    const response = await sickat.get('/realisasidid/');

    dispatch({ type: FETCH_REALISASI_DID, payload: response.data.result });
}