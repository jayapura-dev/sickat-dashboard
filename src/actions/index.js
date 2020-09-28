import sickat from '../api/sickat';
import {
    FETCH_SUMBERDANA,
    FETCH_REALISASIUMUM
} from './types';

export const fetchSumberdana = () => async dispatch => {
    const response = await sickat.get('/sumberdana/');

    dispatch({ type: FETCH_SUMBERDANA, payload: response.data.result });
}

export const fetchRealisasiUmum = () => async dispatch => {
    const response = await sickat.get('/realisasiumum/');

    dispatch({ type: FETCH_REALISASIUMUM, payload: response.data.result });
}