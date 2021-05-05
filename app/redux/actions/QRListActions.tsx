export const ADD_QR = "ADD_QR";
export const REMOVE_QR = "REMOVE_QR";

export function addQR(payload: string) {
  return {
    type: ADD_QR,
    payload
  }
}

export function removeQR(payload: string) {
  return {
    type: REMOVE_QR,
    payload
  }
}