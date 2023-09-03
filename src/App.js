import { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

const ITEMS = [
  {
    id: '1',
    title: 'Lorem ipsum dolor 1',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim congue, mattis odio eget, congue tortor. Cras ullamcorper ut eros rutrum sodales. Nunc tempor elit neque, eget semper sem sollicitudin eget. Pellentesque egestas rutrum feugiat. Maecenas tempus porta nulla, in volutpat orci mattis eu. Suspendisse id blandit sem. Aliquam felis odio, porta non tempus a, fermentum quis nibh. Donec accumsan lorem est, vel euismod est sagittis vitae.',
    isChecked: false,
  },
  {
    id: '2',
    title: 'Lorem ipsum dolor 2',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim congue, mattis odio eget, congue tortor. Cras ullamcorper ut eros rutrum sodales. Nunc tempor elit neque, eget semper sem sollicitudin eget. Pellentesque egestas rutrum feugiat. Maecenas tempus porta nulla, in volutpat orci mattis eu. Suspendisse id blandit sem. Aliquam felis odio, porta non tempus a, fermentum quis nibh. Donec accumsan lorem est, vel euismod est sagittis vitae.',
    isChecked: false,
  },
  {
    id: '3',
    title: 'Lorem ipsum dolor 3',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim congue, mattis odio eget, congue tortor. Cras ullamcorper ut eros rutrum sodales. Nunc tempor elit neque, eget semper sem sollicitudin eget. Pellentesque egestas rutrum feugiat. Maecenas tempus porta nulla, in volutpat orci mattis eu. Suspendisse id blandit sem. Aliquam felis odio, porta non tempus a, fermentum quis nibh. Donec accumsan lorem est, vel euismod est sagittis vitae.',
    isChecked: false,
  },
  {
    id: '4',
    title: 'Lorem ipsum dolor 4',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim congue, mattis odio eget, congue tortor. Cras ullamcorper ut eros rutrum sodales. Nunc tempor elit neque, eget semper sem sollicitudin eget. Pellentesque egestas rutrum feugiat. Maecenas tempus porta nulla, in volutpat orci mattis eu. Suspendisse id blandit sem. Aliquam felis odio, porta non tempus a, fermentum quis nibh. Donec accumsan lorem est, vel euismod est sagittis vitae.',
    isChecked: false,
  },
  {
    id: '5',
    title: 'Lorem ipsum dolor 5',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim congue, mattis odio eget, congue tortor. Cras ullamcorper ut eros rutrum sodales. Nunc tempor elit neque, eget semper sem sollicitudin eget. Pellentesque egestas rutrum feugiat. Maecenas tempus porta nulla, in volutpat orci mattis eu. Suspendisse id blandit sem. Aliquam felis odio, porta non tempus a, fermentum quis nibh. Donec accumsan lorem est, vel euismod est sagittis vitae.',
    isChecked: false,
  },
  {
    id: '6',
    title: 'Lorem ipsum dolor 6',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim congue, mattis odio eget, congue tortor. Cras ullamcorper ut eros rutrum sodales. Nunc tempor elit neque, eget semper sem sollicitudin eget. Pellentesque egestas rutrum feugiat. Maecenas tempus porta nulla, in volutpat orci mattis eu. Suspendisse id blandit sem. Aliquam felis odio, porta non tempus a, fermentum quis nibh. Donec accumsan lorem est, vel euismod est sagittis vitae.',
    isChecked: false,
  },
  {
    id: '7',
    title: 'Lorem ipsum dolor 7',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim congue, mattis odio eget, congue tortor. Cras ullamcorper ut eros rutrum sodales. Nunc tempor elit neque, eget semper sem sollicitudin eget. Pellentesque egestas rutrum feugiat. Maecenas tempus porta nulla, in volutpat orci mattis eu. Suspendisse id blandit sem. Aliquam felis odio, porta non tempus a, fermentum quis nibh. Donec accumsan lorem est, vel euismod est sagittis vitae.',
    isChecked: false,
  },
];

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [items, setItems] = useState(ITEMS);

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  // const { isAddModalOpen, setIsAddModalOpen, handleAddClick } = useItems();

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
