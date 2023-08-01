import { Fragment } from 'react';

import { Textarea, Paragraph } from './CardBody.styled';

const CardBody = (props) => {
  return (
    <Fragment>
      {props.isEditing ? (
        <Textarea value={props.editedDescr} onChange={props.descrChangeHandler}></Textarea>
      ) : (
        <Paragraph>{props.descr}</Paragraph>
      )}
    </Fragment>
  );
};

export default CardBody;
