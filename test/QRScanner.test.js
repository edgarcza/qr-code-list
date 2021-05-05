import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import AppStore from '../app/redux/stores/AppStore';
import QRScanner from '../app/components/QRScanner';

describe('QRScanner component test', () => {
  test('request permission first state', () => {
    const store = AppStore;

    const component = (
      <Provider store={store}>
        <QRScanner />
      </Provider>
    );

    const { getByText } = render(component);

    const perm = getByText('Requesting for camera permission');
    expect(perm).toBeTruthy();
  });
});