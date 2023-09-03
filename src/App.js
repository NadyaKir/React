import { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import Container from './components/UI/Container';
import ViewOnlyCheckbox from './components/ViewOnlyCheckbox/ViewOnlyCheckbox';
import Delete from './components/Delete/Delete';
import Add from './components/Add/Add';
import Modal from './components/Modal/Modal';
import { Provider } from './store/context';

import { Wrapper } from './components/UI/Wrapper.styled';
import { Button } from './components/UI/Button.styled';

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  return (
    <Fragment>
      <Provider>
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
      </Provider>
    </Fragment>
  );
}

export default App;
