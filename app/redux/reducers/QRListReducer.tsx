import { AnyAction } from "redux";
import { ADD_QR, REMOVE_QR } from "../actions/QRListActions";

export interface QRListState {
  qrList: { data: string, id: number }[],
}

const initialState: QRListState = {
  qrList: [],
}

let id = 0;
export function QRListReducer(state = initialState, action: AnyAction) {
  if (action.type === ADD_QR) {
    return {
      ...state,
      qrList: [
        ...state.qrList, {
          data: action.payload,
          id: id++,
        }
      ]
    }
  }
  else if (action.type === REMOVE_QR) {
    id = 0;
    return {
      ...state,
      qrList: state.qrList.filter((q) => q.id !== action.payload).map((q) => ({ ...q, id: id++ }))
    }
  }
  return state
}