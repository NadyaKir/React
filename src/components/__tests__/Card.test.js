import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, waitFor, fireEvent, getByTestId } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider, useDispatch} from 'react-redux';

import CardWithSpinner from '../Card/Card'
import { Card } from '../Card/Card'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

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
        <CardWithSpinner />
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
        <Card id='1'/>
      </Provider>
    );

    await waitFor(
      () => {
        const spinnerElement = screen.queryByTestId('cardSpinner');
        expect(spinnerElement).toBeNull();
      },
      { timeout: 4000 }
    );

    const headerTitleElement = screen.getByTestId('headerTitle');
    expect(headerTitleElement).toBeInTheDocument();
  });

  test('should handle checkbox change correctly', () => {
    const store = mockStore({
      cards: {
        readOnly: false,
      },
    });

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Card id='1'
              isEditing={false}
              title='testTitle'
              descr='testDescr'
              isChecked={false}
              handleChange={() => {}}
              onDoubleClick={() => {}}
              readOnly={false}
              isCheckbox={true}
              hiddenCheckbox={false}
          />
      </Provider>
    );

    const checkboxElement = screen.getByTestId('cardCheckbox');
    fireEvent.click(checkboxElement)

    expect(dispatch).toHaveBeenCalled();
  })

  test('should handle item change correctly', () => {
    const store = mockStore({
      cards: {
        readOnly: false,
      },
    });

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const {getByTestId} = render(
      <Provider store={store}>
        <Card id='1'
              isEditing={true}
              title='testTitle'
              descr='testDescr'
              isChecked={false}
              handleChange={() => {}}
              onDoubleClick={() => {}}
              readOnly={false}
              isCheckbox={true}
              hiddenCheckbox={false}
        />
      </Provider>,
    );

    const saveButtonElement = getByTestId('saveButton');
    fireEvent.click(saveButtonElement)

    expect(dispatch).toHaveBeenCalled()
  })

  test('should handle change correctly after click on edit button', () => {
    const store = mockStore({
      cards: {
        readOnly: false,
      },
    });

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const {getByTestId} = render(
      <Provider store={store}>
        <Card id='1'
              isEditing={false}
              title='testTitle'
              descr='testDescr'
              isChecked={false}
              handleChange={() => {}}
              onDoubleClick={() => {}}
              readOnly={false}
              isCheckbox={true}
              hiddenCheckbox={false}
        />
      </Provider>,
    );

    const editButtonElement = getByTestId('editButton');
    fireEvent.click(editButtonElement)

    expect(dispatch).toHaveBeenCalled()
  })

  test('should handle change correctly after click on save button', () => {
    const store = mockStore({
      cards: {
        readOnly: false,
      },
    });

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const {getByTestId} = render(
      <Provider store={store}>
        <Card id='1'
              isEditing={true}
              title='testTitle'
              descr='testDescr'
              isChecked={false}
              handleChange={() => {}}
              onDoubleClick={() => {}}
              readOnly={false}
              isCheckbox={true}
              hiddenCheckbox={false}
        />
      </Provider>,
    );

    const saveButtonElement = getByTestId('saveButton');
    fireEvent.click(saveButtonElement)

    expect(dispatch).toHaveBeenCalled()
  })

  test('should handle change correctly after click on cancel button', () => {
    const store = mockStore({
      cards: {
        readOnly: false,
      },
    });

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const {getByTestId} = render(
      <Provider store={store}>
        <Card id='1'
              isEditing={true}
              title='testTitle'
              descr='testDescr'
              isChecked={false}
              handleChange={() => {}}
              onDoubleClick={() => {}}
              readOnly={false}
              isCheckbox={true}
              hiddenCheckbox={false}
        />
      </Provider>,
    );

    const cancelButtonElement = getByTestId('cancelButton');
    fireEvent.click(cancelButtonElement)

    expect(dispatch).toHaveBeenCalled()
  })
});
