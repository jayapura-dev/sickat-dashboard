import sickat from '../api/sickat';
import {
    FETCH_SUMBERDANA
} from './types';

export const fetchSumberdana = () => async dispatch => {
    const response = await sickat.get('/sumberdana');

    dispatch({ type: FETCH_SUMBERDANA, payload: response.data.sd });
}