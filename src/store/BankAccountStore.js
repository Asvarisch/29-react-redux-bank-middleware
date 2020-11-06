//import accountReducer from "../reducers/AccountReducer";
import rootReducer from "../reducers/RootReducer";
import {createStore} from "redux";

const initialState = {balance: 0, quote: 'Winter is coming'};

const store = createStore(rootReducer, initialState);
export default store;