import { DEPOSIT, WITHDRAW } from "../actions/AccountActions";

function balanceReducer(state=0, action) {
    switch (action.type) {
        case DEPOSIT:
            return state + action.payload ;
        case WITHDRAW:
            const res = state - action.payload;
            return res < 0 ? state : res ;
        default:
            return state;
    }
}

export default balanceReducer;