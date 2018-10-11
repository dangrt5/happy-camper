import types from './types';
import axios from 'axios';


// const BASE_URL = 'http://api.reactprototypes.com';
// const API_KEY = '?key=originalkeyname';

export async function getResultsData(lat, lng){
    // console.log("Axios Call to PHP FILE paramaters",lat, lng);
    //async and await unnecessary with redux-promise // redux-promise didn't work so used async await
    const resp = await axios({
        method: "POST",
        data: { lat, lng },
        url: `http://localhost:8888/public/api/results_data.php`,
        headers: {"Content-Type": "application/x-www-form-urlencoded"}
    });

    // const results = resp;
    console.log("PHP Call successful:", resp.data.data)
    return {
        type: types.GET_RESULTS_DATA,
        payload: resp.data.data
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

export function addItem(item){
    return{
        type: types.ADD_ITEM,
        payload: item
    }
}

export function removeItem(itemId){
    return{
        type: types.REMOVE_ITEM,
        payload: itemId
    }
}
