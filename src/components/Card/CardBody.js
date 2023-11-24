import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { Textarea, Paragraph } from './CardBody.styled';

const CardBody = (props) => {
  const editingCardId = useSelector((state) => state.cards.editingCardId);
  const editingCard = props.id === editingCardId;

  return (
    <Fragment>
      {props.isEditing && editingCard ? (
        <Textarea
          value={props.editedDescr}
          onChange={props.descrChangeHandler}
        ></Textarea>
      ) : (
        <Paragraph>{props.descr}</Paragraph>
      )}
    </Fragment>
  );
};

export default CardBody;
