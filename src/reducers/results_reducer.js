import types from '../actions/types'
const DEFAULT_STATE = {
    results: [],
    single: {},
    itinerary: checkLocalStorage()
}

function checkLocalStorage(){
    if(localStorage.getItem('itinerary')){
        return JSON.parse(localStorage.getItem('itinerary'))
    }
    return [];
}

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.ADD_ITEM:
            state.itinerary.push(action.payload)
            localStorage.setItem('itinerary', JSON.stringify(state.itinerary))
            return {...state}
        case types.REMOVE_ITEM:
            const filteredItinerary = state.itinerary.filter(item => item.parkinfo[0].id !== action.payload)
            localStorage.setItem('itinerary', JSON.stringify(filteredItinerary))
            return {...state, itinerary: filteredItinerary}
        case types.CLEAR_SINGLE_ITEM:
            return {...state, single: {}}
        case types.GET_SINGLE_ITEM:
            return {...state, single: action.payload};
        case types.GET_RESULTS_DATA:
            return {...state, results: action.payload}
        default:
            return state;
    }
}
