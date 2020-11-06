import {PUT_QUOTE} from "../actions/AccountActions";

const initialState = {quote: 'Winter is coming'}

function quotesReducer(state=initialState, action){
    switch (action.type) {
        case PUT_QUOTE:
            return action.payload
        default:
            return state;
    }
}

export default quotesReducer;