import { AnyAction } from "redux";
import { ADD_QR } from "../actions/QRListActions";

export interface QRListState {
  qrList: string[],
}

const initialState: QRListState = {
  qrList: [],
}

export function QRListReducer(state = initialState, action: AnyAction) {
  if (action.type === ADD_QR) {
    return {
      ...state,
      qrList: [
        ...state.qrList,
        action.payload
      ]
    }
  }
  return state
}