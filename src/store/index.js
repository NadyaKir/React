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
    setIsEditing() {},
    addItem() {},
    itemChange() {},
    openAddModal() {},
    closeAddModal() {},
    setReadOnly() {},
  },
});

// const cardsReducer = (state = initialState, action) => {
//   //dataLoading
//   if (action.type === 'FETCH_DATA') {
//     return {
//       ...state,
//       items: action.payload.modifiedData,
//       itemsCount: action.payload.modifiedDataLength,
//     };
//   }

//   if (action.type === 'SET_ISEDITING') {
//     return {
//       ...state,
//       isEditing: action.payload.isEditing,
//     };
//   }

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

//   //deleteCard
//   if (action.type === 'DELETE_ITEM') {
//     const updatedItems = state.items.filter((item) => !item.isChecked);

//     return {
//       ...state,
//       items: updatedItems,
//       itemsCount: updatedItems.length,
//     };
//   }

//   //openAddModal
//   if (action.type === 'OPEN_ADD_MODAL') {
//     return {
//       ...state,
//       isAddModalOpen: true,
//     };
//   }

//   //closeAddModal
//   if (action.type === 'CLOSE_ADD_MODAL') {
//     return {
//       ...state,
//       isAddModalOpen: false,
//     };
//   }

//   //checkboxViewOnlyState
//   if (action.type === 'SET_READ_ONLY') {
//     return {
//       ...state,
//       readOnly: !state.readOnly,
//       isEditing: false,
//     };
//   }

//   return state;
// };

const store = configureStore({
  reducer: {
    cards: cardsSlice.reducer,
  },
  middleware: [thunk, logActionMiddleware],
});

export const cardsActions = cardsSlice.actions;
export default store;
