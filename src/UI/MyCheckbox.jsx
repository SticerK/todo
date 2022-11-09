const MyChackbox = ({ newTask, setNewTask, children, styles, name }) => {
  return (
    <div className='MyInput' style={styles}>
      <div
        className='checkbox-container'
        onClick={({ target }) =>
          setNewTask({ ...newTask, [name]: !newTask[name] })
        }>
        <div
          className={
            'checkbox-innerContainer' +
            (newTask[name] ? ' active-checkbox' : '')
          }></div>
      </div>
      <p>{children}</p>
    </div>
  );
};

export default MyChackbox;
