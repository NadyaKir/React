import { createStore, applyMiddleware } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { v4 as uuidv4 } from 'uuid';

import { logActionMiddleware } from './logActionMiddleware';

const initialState = {
  items: [],
  readOnly: true,
  isAddModalOpen: false,
  isChecked: false,
  isEditing: false,
  itemsCount: 0,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    fetchData(state, action) {
      state.items = action.payload.items;
      state.itemsCount = action.payload.itemsCount;
    },
    setIsEditing(state, action) {
      state.isEditing = action.payload.isEditing;
    },
    addItem(state, action) {
      const id = uuidv4();
      const newItem = {
        Number: id,
        Name: action.payload.title,
        About: action.payload.descr,
        isChecked: false,
      };

      state.items = [newItem, ...state.items];
      state.isAddModalOpen = false;
      state.itemsCount = state.items.length + 1;
    },
    itemChange(state, action) {
      const updatedItems = state.items.map((item) => {
        if (item.Number === action.payload.id) {
          return {
            ...item,
            Name: action.payload.editedTitle,
            About: action.payload.editedDescr,
            isChecked: action.payload.isChecked,
          };
        }
        return item;
      });

      state.items = updatedItems;
    },
    deleteItem(state, action) {
      const updatedItems = state.items.filter((item) => !item.isChecked);

      state.items = updatedItems;
      state.itemsCount = updatedItems.length;
    },
    openAddModal(state, action) {
      state.isAddModalOpen = true;
    },
    closeAddModal(state, action) {
      state.isAddModalOpen = false;
    },
    setReadOnly(state, action) {
      state.readOnly = !state.readOnly;
      state.isEditing = false;
    },
  },
});

//   //addNewCard
//   if (action.type === 'ADD_ITEM') {
//     const id = uuidv4();
//     const newItem = {
//       Number: id,
//       Name: action.payload.title,
//       About: action.payload.descr,
//       isChecked: false,
//     };

//     return {
//       ...state,
//       items: [newItem, ...state.items],
//       isAddModalOpen: false,
//       itemsCount: state.items.length + 1,
//     };
//   }

//   //updateCardData
//   if (action.type === 'ITEM_CHANGE') {
//     const updatedItems = state.items.map((item) => {
//       if (item.Number === action.payload.id) {
//         return {
//           ...item,
//           Name: action.payload.editedTitle,
//           About: action.payload.editedDescr,
//           isChecked: action.payload.isChecked,
//         };
//       }
//       return item;
//     });

//     return {
//       ...state,
//       items: updatedItems,
//     };
//   }

// };

const store = configureStore({
  reducer: {
    cards: cardsSlice.reducer,
  },
  middleware: [thunk, logActionMiddleware],
});

export const cardsActions = cardsSlice.actions;
export default store;
