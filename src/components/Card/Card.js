import { useState, useEffect, useContext } from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardWrapper from '../UI/CardWrapper';
import withLoadingDelay from '../UI/withLoadingDelay';
import PropTypes from 'prop-types';
import { ItemsContext } from '../../store/context';

const Card = (props) => {
  Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    descr: PropTypes.string,
    isChecked: PropTypes.bool,
    handleChange: PropTypes.func,
    readOnly: PropTypes.bool,
  };

  //checkbox
  const [isChecked, setIsChecked] = useState(props.isChecked);

  //edit
  const [isEditing, setIsEditing] = useState(false);

  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedDescr, setEditedDescr] = useState(props.descr);

  const resetEditingMode = () => {
    setIsEditing(false);
  };

  const { readOnly, handleChange } = useContext(ItemsContext);

  useEffect(() => {
    if (readOnly && isEditing) {
      resetValues();
      resetEditingMode();
    }
  }, [isEditing, readOnly]);

  //checkbox func
  const checkboxChangeHandler = () => {
    const newIsChecked = !isChecked;

    setIsChecked(newIsChecked);
    handleChange(props.id, editedTitle, editedDescr, newIsChecked);
  };

  //buttons func-s
  const clickEditButtonHandler = () => {
    setIsEditing(!isEditing);
    setIsChecked(false);
  };

  const clickSaveButtonHandler = () => {
    setIsEditing(!isEditing);
    handleChange(props.id, editedTitle, editedDescr, isChecked);
  };

  const resetValues = () => {
    setEditedTitle(props.title);
    setEditedDescr(props.descr);
  };

  const clickCancelButtonHandler = () => {
    setIsEditing(!isEditing);
    resetValues();
  };

  //change handlers
  const titleChangeHandler = (event) => {
    setEditedTitle(event.target.value);
  };

  const descrChangeHandler = (event) => {
    setEditedDescr(event.target.value);
  };

  return (
    <CardWrapper>
      <CardHeader
        id={props.id}
        isEditing={isEditing}
        editedTitle={editedTitle}
        title={props.title}
        titleChangeHandler={titleChangeHandler}
        clickEditButtonHandler={clickEditButtonHandler}
        clickSaveButtonHandler={clickSaveButtonHandler}
        clickCancelButtonHandler={clickCancelButtonHandler}
        checkboxChangeHandler={checkboxChangeHandler}
        isChecked={isChecked}
        readOnly={readOnly}
      ></CardHeader>
      <CardBody
        descr={props.descr}
        editedDescr={editedDescr}
        isEditing={isEditing}
        descrChangeHandler={descrChangeHandler}
      ></CardBody>
    </CardWrapper>
  );
};

export default withLoadingDelay(Card);
