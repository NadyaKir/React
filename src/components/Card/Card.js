import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardWrapper from '../UI/CardWrapper';
import withLoadingDelay from '../UI/withLoadingDelay';
import PropTypes from 'prop-types';

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
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedDescr, setEditedDescr] = useState(props.descr);

  const dispatch = useDispatch();
  const readOnly = useSelector((state) => state.readOnly);
  const isEditing = useSelector((state) => state.isEditing);

  const handleChange = () => {
    dispatch({
      type: 'ITEM_CHANGE',
      id: props.id,
      editedTitle: editedTitle,
      editedDescr: editedDescr,
      isChecked: isChecked,
    });
  };

  const resetEditingMode = () => {
    dispatch({
      type: 'SET_CHECKBOX_VISABILITY',
      isEditing: isEditing,
    });
  };

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
    dispatch({
      type: 'ITEM_CHANGE',
      id: props.id,
      editedTitle: editedTitle,
      editedDescr: editedDescr,
      isChecked: newIsChecked,
    });
  };

  //buttons func-s
  const clickEditButtonHandler = () => {
    dispatch({
      type: 'SET_CHECKBOX_VISABILITY',
      isEditing: !isEditing,
    });
    setIsChecked(false);
  };

  const clickSaveButtonHandler = () => {
    dispatch({
      type: 'SET_CHECKBOX_VISABILITY',
      isEditing: !isEditing,
    });
    handleChange(props.id, editedTitle, editedDescr, isChecked);
  };

  const resetValues = () => {
    setEditedTitle(props.title);
    setEditedDescr(props.descr);
  };

  const clickCancelButtonHandler = () => {
    dispatch({
      type: 'SET_CHECKBOX_VISABILITY',
      isEditing: !isEditing,
    });
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
      <div onDoubleClick={props.onDoubleClick}>
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
      </div>
    </CardWrapper>
  );
};

export default withLoadingDelay(Card);
