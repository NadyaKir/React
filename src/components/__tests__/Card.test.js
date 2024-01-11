import '@testing-library/jest-dom';
import { screen, render, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Card from '../Card/Card';

describe('Card component', () => {
  const mockStore = configureMockStore();

  test('renders spinner before card', () => {
    const store = mockStore({
      cards: {
        readOnly: false,
      },
    });

    render(
      <Provider store={store}>
        <Card />
      </Provider>
    );

    expect(screen.getByTestId('cardSpinner')).toBeInTheDocument();
  });

  test('renders card after spinner', async () => {
    const store = mockStore({
      cards: {
        readOnly: false,
      },
    });

    render(
      <Provider store={store}>
        <Card />
      </Provider>
    );

    return new Promise((resolve) => {
      setTimeout(() => {
        expect(screen.getByTestId('headerTitle'));
        resolve();
      }, 3000);
    });
  });
});
