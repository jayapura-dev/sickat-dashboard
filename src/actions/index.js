import sickat from '../api/sickat';
import {
    FETCH_SUMBERDANA,
    FETCH_REALISASIPD,
    FETCH_REALISASI_DAU,
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