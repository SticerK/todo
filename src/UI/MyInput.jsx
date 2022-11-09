const MyInput = ({ placeholder, newTask, setNewTask, name }) => {
  return (
    <>
      <input
        name={name}
        className='form-input'
        placeholder={placeholder}
        onChange={({ target }) =>
          setNewTask({ ...newTask, [target.name]: target.value })
        }
      />
      <div className='input-line'></div>
    </>
  );
};

export default MyInput;
