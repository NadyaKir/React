import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const ItemsContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [readOnly, setReadOnly] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  console.log(items);
  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json'
      )
      .then((res) => setItems(res.data.slice(0, 15)))
      .catch((err) => console.log(err));
  }, []);

  const handleAdd = (title, descr) => {
    const id = uuidv4();
    const newItem = {
      Number: id,
      Name: title,
      About: descr,
      isChecked: false,
    };

    setItems((prevItems) => [newItem, ...prevItems]);

    setIsAddModalOpen(false);
  };

  const handleChange = (id, editedTitle, editedDescr, isChecked) => {
    const updatedItems = items.map((item) => {
      if (item.Number === id) {
        return {
          ...item,
          Name: editedTitle,
          About: editedDescr,
          isChecked: isChecked,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleDeleteCards = () => {
    const updatedItems = items.filter((item) => !item.isChecked);
    setItems(updatedItems);
  };

  const readOnlyHandler = () => {
    setReadOnly(!readOnly);
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const contextData = {
    itemsCount: items.length,
    items: items,
    readOnly: readOnly,
    isAddModalOpen: isAddModalOpen,
    setIsAddModalOpen: setIsAddModalOpen,
    readOnlyHandler: readOnlyHandler,
    handleAdd: handleAdd,
    handleAddClick: handleAddClick,
    handleChange: handleChange,
    handleDeleteCards: handleDeleteCards,
  };

  return (
    <ItemsContext.Provider value={contextData}>
      {children}
    </ItemsContext.Provider>
  );
};
