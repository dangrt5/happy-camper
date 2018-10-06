import types from './types';
import axios from 'axios';

// const BASE_URL = 'http://api.reactprototypes.com';
// const API_KEY = '?key=originalkeyname';

export function getResultsData(lat, lng){  //async and await unnecessary with redux-promise
    const resp = axios.get(`/search/${lat}/${lng}`);
    return {
        type: types.GET_RESULTS_DATA,
        payload: resp
    }
}

export function getSingleItem(itemId){
    const resp = axios.get(`/item/${itemId}`);
    return {
        type: types.GET_SINGLE_ITEM,
        payload: resp
    }
}

export function clearSingleItem(){
    return{
        type: types.CLEAR_SINGLE_ITEM
    }
}
