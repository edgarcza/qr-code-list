import { createStore } from "redux";
import { QRListReducer } from '../reducers/QRListReducer';

const store = createStore(QRListReducer)
console.log(store.getState())
export default store;
