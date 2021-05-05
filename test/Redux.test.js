import { QRListReducer } from '../app/redux/reducers/QRListReducer';
import { ADD_QR, REMOVE_QR } from '../app/redux/actions/QRListActions';
// import * as types from '../../constants/ActionTypes'

describe('QRList reducer', () => {
  it('should return the initial state', () => {
    expect(QRListReducer(undefined, {})).toEqual({
      qrList: [],
    })
  })

  it('should handle ADD_QR', () => {
    expect(
      QRListReducer({ qrList: [] }, {
        type: ADD_QR,
        payload: 'foo'
      })
    ).toEqual({
      qrList: [{
        data: "foo",
        id: 0,
      }]
    })
  })

  it('should handle REMOVE_QR', () => {
    expect(
      QRListReducer({ qrList: [{ data: "foo", id: 0 }] }, {
        type: REMOVE_QR,
        payload: 0
      })
    ).toEqual({
      qrList: []
    })
  })
})