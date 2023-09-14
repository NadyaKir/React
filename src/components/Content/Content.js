import { Fragment } from 'react';
import { useContext } from 'react';

import CardList from '../CardList/CardList';
import Container from '../UI/Container';
import ViewOnlyCheckbox from '../ViewOnlyCheckbox/ViewOnlyCheckbox';
import Delete from '../Delete/Delete';
import Add from '../Add/Add';
import Modal from '../Modal/Modal';
import { ItemsContext } from '../../store/context';

import { Wrapper } from '../UI/Wrapper.styled';
import { Button } from '../UI/Button.styled';

const Content = () => {
  const { isAddModalOpen, setIsAddModalOpen, handleAddClick } =
    useContext(ItemsContext);

  return (
    <Fragment>
      <Container>
        <Wrapper>
          <ViewOnlyCheckbox />
          <Button save="true" onClick={handleAddClick}>
            Добавить
          </Button>
          <Delete></Delete>
          <CardList />
          {isAddModalOpen && (
            <Modal closeModal={() => setIsAddModalOpen(false)}>
              <Add />
            </Modal>
          )}
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default Content;
