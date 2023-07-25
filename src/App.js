import { Fragment, useState } from 'react';

import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Container from './components/UI/Container';
import ViewOnlyCheckbox from './components/Checkbox/ViewOnlyCheckbox';

const BASE_LOREM = [
  {
    id: '1',
    title: 'Lorem ipsum dolor',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim congue, mattis odio eget, congue tortor. Cras ullamcorper ut eros rutrum sodales. Nunc tempor elit neque, eget semper sem sollicitudin eget. Pellentesque egestas rutrum feugiat. Maecenas tempus porta nulla, in volutpat orci mattis eu. Suspendisse id blandit sem. Aliquam felis odio, porta non tempus a, fermentum quis nibh. Donec accumsan lorem est, vel euismod est sagittis vitae.',
  },
  {
    id: '2',
    title: 'Lorem ipsum dolor',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim congue, mattis odio eget, congue tortor. Cras ullamcorper ut eros rutrum sodales. Nunc tempor elit neque, eget semper sem sollicitudin eget. Pellentesque egestas rutrum feugiat. Maecenas tempus porta nulla, in volutpat orci mattis eu. Suspendisse id blandit sem. Aliquam felis odio, porta non tempus a, fermentum quis nibh. Donec accumsan lorem est, vel euismod est sagittis vitae.',
  },
  {
    id: '3',
    title: 'Lorem ipsum dolor',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim congue, mattis odio eget, congue tortor. Cras ullamcorper ut eros rutrum sodales. Nunc tempor elit neque, eget semper sem sollicitudin eget. Pellentesque egestas rutrum feugiat. Maecenas tempus porta nulla, in volutpat orci mattis eu. Suspendisse id blandit sem. Aliquam felis odio, porta non tempus a, fermentum quis nibh. Donec accumsan lorem est, vel euismod est sagittis vitae.',
  },
  {
    id: '4',
    title: 'Lorem ipsum dolor',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim congue, mattis odio eget, congue tortor. Cras ullamcorper ut eros rutrum sodales. Nunc tempor elit neque, eget semper sem sollicitudin eget. Pellentesque egestas rutrum feugiat. Maecenas tempus porta nulla, in volutpat orci mattis eu. Suspendisse id blandit sem. Aliquam felis odio, porta non tempus a, fermentum quis nibh. Donec accumsan lorem est, vel euismod est sagittis vitae.',
  },
  {
    id: '5',
    title: 'Lorem ipsum dolor',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim congue, mattis odio eget, congue tortor. Cras ullamcorper ut eros rutrum sodales. Nunc tempor elit neque, eget semper sem sollicitudin eget. Pellentesque egestas rutrum feugiat. Maecenas tempus porta nulla, in volutpat orci mattis eu. Suspendisse id blandit sem. Aliquam felis odio, porta non tempus a, fermentum quis nibh. Donec accumsan lorem est, vel euismod est sagittis vitae.',
  },
  {
    id: '6',
    title: 'Lorem ipsum dolor',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim congue, mattis odio eget, congue tortor. Cras ullamcorper ut eros rutrum sodales. Nunc tempor elit neque, eget semper sem sollicitudin eget. Pellentesque egestas rutrum feugiat. Maecenas tempus porta nulla, in volutpat orci mattis eu. Suspendisse id blandit sem. Aliquam felis odio, porta non tempus a, fermentum quis nibh. Donec accumsan lorem est, vel euismod est sagittis vitae.',
  },
  {
    id: '7',
    title: 'Lorem ipsum dolor',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim congue, mattis odio eget, congue tortor. Cras ullamcorper ut eros rutrum sodales. Nunc tempor elit neque, eget semper sem sollicitudin eget. Pellentesque egestas rutrum feugiat. Maecenas tempus porta nulla, in volutpat orci mattis eu. Suspendisse id blandit sem. Aliquam felis odio, porta non tempus a, fermentum quis nibh. Donec accumsan lorem est, vel euismod est sagittis vitae.',
  },
];

function App() {
  const [lorem, setLorem] = useState(BASE_LOREM);

  const handleLoremChange = (loremId, editedTitle, editedDescr) => {
    const updatedLorem = lorem.map((lrm) => {
      if (lrm.id === loremId) {
        return {
          ...lrm,
          title: editedTitle,
          descr: editedDescr,
        };
      }
      return lrm;
    });
    setLorem(updatedLorem);
  };

  const [readOnly, setReadOnly] = useState(true);

  const readOnlyHandler = () => {
    setReadOnly(!readOnly);
  };

  return (
    <Fragment>
      <Header />
      <Container>
        <ViewOnlyCheckbox readOnly={readOnly} readOnlyHandler={readOnlyHandler}></ViewOnlyCheckbox>
        <div className="cards">
          {lorem.map((lrm) => (
            <Card
              key={lrm.id}
              id={lrm.id}
              title={lrm.title}
              descr={lrm.descr}
              handleLoremChange={handleLoremChange}
              readOnly={readOnly}
            />
          ))}
        </div>
      </Container>
    </Fragment>
  );
}

export default App;
