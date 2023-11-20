import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cardsActions } from '../../store';

import CardList from '../CardList/CardList';
import ViewOnlyCheckbox from '../ViewOnlyCheckbox/ViewOnlyCheckbox';
import Delete from '../Delete/Delete';
import Add from '../Add/Add';
import Modal from '../Modal/Modal';

import { ActionsBlock } from './Content.styled';
import { Button } from '../UI/Button.styled';

const Content = () => {
  const dispatch = useDispatch();
  const isAddModalOpen = useSelector((state) => state.cards.isAddModalOpen);
  const readOnly = useSelector((state) => state.cards.readOnly);

  const handleAddClick = () => {
    dispatch(cardsActions.openAddModal());
  };

  const closeModal = () => {
    dispatch(cardsActions.closeAddModal());
  };

  return (
    <Fragment>
      <ActionsBlock>
        <Button readOnly={readOnly} save="true" onClick={handleAddClick}>
          Добавить
        </Button>
        <Delete readOnly={readOnly}></Delete>
      </ActionsBlock>
      <CardList />
      {isAddModalOpen && (
        <Modal closeModal={() => closeModal()}>
          <Add />
        </Modal>
      )}
    </Fragment>
  );
};

export default Content;
