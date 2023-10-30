import { createStore } from 'redux';

import { v4 as uuidv4 } from 'uuid';

const initialState = {
  items: [],
  readOnly: true,
  isAddModalOpen: false,
  isChecked: false,
  isEditing: false,
  itemsCount: 0,
};

const cardsReducer = (state = initialState, action) => {
  //dataLoading
  if (action.type === 'FETCH_DATA') {
    return {
      ...state,
      items: action.modifiedData,
      itemsCount: action.modifiedData.length,
    };
  }

  if (action.type === 'SET_ISEDITING') {
    return {
      ...state,
      isEditing: action.isEditing,
    };
  }

  //addNewCard
  if (action.type === 'ADD_ITEM') {
    const id = uuidv4();
    const newItem = {
      Number: id,
      Name: action.title,
      About: action.descr,
      isChecked: false,
    };

    return {
      ...state,
      items: [newItem, ...state.items],
      isAddModalOpen: false,
      itemsCount: state.items.length + 1,
    };
  }

  //updateCardData
  if (action.type === 'ITEM_CHANGE') {
    const updatedItems = state.items.map((item) => {
      if (item.Number === action.id) {
        return {
          ...item,
          Name: action.editedTitle,
          About: action.editedDescr,
          isChecked: action.isChecked,
        };
      }
      return item;
    });

    return {
      ...state,
      items: updatedItems,
    };
  }

  //deleteCard
  if (action.type === 'DELETE_ITEM') {
    const updatedItems = state.items.filter((item) => !item.isChecked);

    return {
      ...state,
      items: updatedItems,
      itemsCount: updatedItems.length,
    };
  }

  //openAddModal
  if (action.type === 'OPEN_ADD_MODAL') {
    return {
      ...state,
      isAddModalOpen: true,
    };
  }

  //closeAddModal
  if (action.type === 'CLOSE_ADD_MODAL') {
    return {
      ...state,

      isAddModalOpen: false,
    };
  }

  //checkboxViewOnlyState
  if (action.type === 'SET_READ_ONLY') {
    return {
      ...state,
      readOnly: !state.readOnly,
      isEditing: false,
    };
  }

  return state;
};

const store = createStore(cardsReducer);

export default store;
