import { Fragment, useState } from 'react';

import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import Container from './components/UI/Container';
import ViewOnlyCheckbox from './components/ViewOnlyCheckbox/ViewOnlyCheckbox';
import Delete from './components/Delete/Delete';
import Add from './components/Add/Add';
import Modal from './components/Modal/Modal';
import { Provider, useItems } from './store/context';

import { Wrapper } from './components/UI/Wrapper.styled';
import { Button } from './components/UI/Button.styled';

function AppContent() {
  const { isAddModalOpen, setIsAddModalOpen, handleAddClick } = useItems();

  return (
    <Fragment>
      <Header />
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
}

function App() {
  return (
    <Provider>
      <AppContent />
    </Provider>
  );
}

export default App;
