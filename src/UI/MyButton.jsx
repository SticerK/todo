const MyButton = ({ children, newTask, func, styles }) => {
  return (
    <button
      type='button'
      className={'btn'}
      onClick={() => func(newTask)}
      style={styles}>
      {children}
    </button>
  );
};

export default MyButton;
