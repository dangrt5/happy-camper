import types from './types';
import axios from 'axios';


// const BASE_URL = 'http://api.reactprototypes.com';
// const API_KEY = '?key=originalkeyname';

export async function getResultsData(city){ 
    //async and await unnecessary with redux-promise // redux-promise didn't work so used async await
    const resp = await axios.get(`http://localhost:8888/public/api/results_data.php`, {city});
    const results = resp.data.data;
    console.log(results);
    return {
        type: types.GET_RESULTS_DATA,
        payload: results
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
