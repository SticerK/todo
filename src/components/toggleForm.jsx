const ToggleForm = ({ toggleForm, handleToggleForm }) => {
  return (
    <div className='toggle-form-container'>
      <div className={'toggle-form'} id='1' onClick={handleToggleForm}>
        Обычная
      </div>
      <div className={'toggle-form'} id='2' onClick={handleToggleForm}>
        Расширенная
      </div>
      <div
        className='active-toggle-form'
        style={
          toggleForm === 2
            ? { transform: 'translateX(150px)' }
            : { transform: 'translateX(0px)' }
        }></div>
    </div>
  );
};

export default ToggleForm;
