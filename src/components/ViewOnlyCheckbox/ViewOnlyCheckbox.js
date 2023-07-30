import styles from './ViewOnlyCheckbox.module.css';

const ViewOnlyCheckbox = (props) => {
  return (
    <div className={styles['view-only-checkbox']}>
      <label htmlFor="viewOnly">Только просмотр:</label>
      <input
        className={styles['checkbox']}
        type="checkbox"
        id="viewOnly"
        checked={props.readOnly}
        onChange={props.readOnlyHandler}></input>
    </div>
  );
};

export default ViewOnlyCheckbox;
