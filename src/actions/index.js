import types from './types';
import axios from 'axios';

export async function getResultsData(lat, lng){
    const resp = await axios({
        method: "GET",
        params: { lat, lng },
        url: `/api/results_data.php`,

        headers: {"Content-Type": "application/x-www-form-urlencoded"}
    });
    console.log("resultsData PHP Call successful:", resp.data.data);
    return {
        type: types.GET_RESULTS_DATA,
        payload: resp.data.data
    }
}

export async function getSingleItem(itemId){
    const resp = await axios({
        method: "GET",
        params: { itemId },
        url: `/api/park_details.php`,
        headers: {"Content-Type": "application/x-www-form-urlencoded"}
    });
    // console.log ("POST singleItem PHP Call success:", resp.data.data);
    return {
        type: types.GET_SINGLE_ITEM,
        payload: resp.data.data
    }
}

export function clearSingleItem(){
    return{
        type: types.CLEAR_SINGLE_ITEM
    }
}

export function addItem(item){
    // localStorage.setItem('itinerary', resp.data.token)
    return{
        type: types.ADD_ITEM,
        payload: item
    }
}

export function removeItem(itemId){
    // localStorage.removeItem('token')
    return{
        type: types.REMOVE_ITEM,
        payload: itemId
    }
}
