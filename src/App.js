import { Fragment, useState } from 'react';

import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import Container from './components/UI/Container';
import ViewOnlyCheckbox from './components/ViewOnlyCheckbox/ViewOnlyCheckbox';
import Delete from './components/Delete/Delete';

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
  const [items, setItems] = useState(ITEMS);
  const [readOnly, setReadOnly] = useState(true);

  const handleChange = (id, editedTitle, editedDescr, isChecked) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title: editedTitle,
          descr: editedDescr,
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

  return (
    <Fragment>
      <Header />
      <Container>
        <ViewOnlyCheckbox readOnly={readOnly} readOnlyHandler={readOnlyHandler} />
        <Delete handleDeleteCards={handleDeleteCards}></Delete>
        <CardList
          items={items}
          setItems={setItems}
          handleChange={handleChange}
          readOnly={readOnly}
          handleDeleteCards={handleDeleteCards}
        />
      </Container>
    </Fragment>
  );
}

export default App;
