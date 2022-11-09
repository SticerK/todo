const MyTextArea = ({ placeholder, newTask, setNewTask, styles, name }) => {
  return (
    <textarea
      style={styles}
      className='form-textarea'
      name={name}
      placeholder={placeholder}
      onChange={({ target }) =>
        setNewTask({ ...newTask, [target.name]: target.value })
      }></textarea>
  );
};

export default MyTextArea;
