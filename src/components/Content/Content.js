import { Fragment } from 'react';

import CardList from '../CardList/CardList';
import ViewOnlyCheckbox from '../ViewOnlyCheckbox/ViewOnlyCheckbox';
import Delete from '../Delete/Delete';
import Add from '../Add/Add';
import Modal from '../Modal/Modal';

import { Button } from '../UI/Button.styled';
import { useDispatch, useSelector } from 'react-redux';

const Content = () => {
  const dispatch = useDispatch();

  const isAddModalOpen = useSelector((state) => state.isAddModalOpen);

  const handleAddClick = () => {
    dispatch({ type: 'OPEN_ADD_MODAL' });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_ADD_MODAL' });
  };

  return (
    <Fragment>
      <ViewOnlyCheckbox />
      <Button save="true" onClick={handleAddClick}>
        Добавить
      </Button>
      <Delete></Delete>
      <CardList />
      {isAddModalOpen && (
        <Modal closeModal={() => closeModal}>
          <Add />
        </Modal>
      )}
    </Fragment>
  );
};

export default Content;
