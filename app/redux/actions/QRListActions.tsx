export const ADD_QR = "ADD_QR";

export function addQR(payload: string) {
  return {
    type: ADD_QR,
    payload
  }
}