export const fetchData = (modifiedData, modifiedDataLength) => ({
  type: 'FETCH_DATA',
  payload: {
    modifiedData,
    modifiedDataLength,
  },
});

export const addItem = (title, descr) => ({
  type: 'ADD_ITEM',
  payload: {
    title,
    descr,
  },
});

export const itemChange = (id, editedTitle, editedDescr, isChecked) => ({
  type: 'ITEM_CHANGE',
  payload: {
    id,
    editedTitle,
    editedDescr,
    isChecked,
  },
});

export const setIsEditing = (isEditing) => ({
  type: 'SET_ISEDITING',
  payload: {
    isEditing,
  },
});
