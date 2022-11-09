import MyChackbox from '../UI/MyCheckbox';
import MyInput from '../UI/MyInput';
import MyTextArea from '../UI/MyTextArea';
import { useState } from 'react';

const ExtendedForm = ({ newTask, setNewTask }) => {
  const [options, setOptions] = useState({});

  return (
    <>
      <MyInput
        setNewTask={setNewTask}
        newTask={newTask}
        placeholder='Введите название задачи'
        name='title'
      />
      <MyTextArea
        setNewTask={setNewTask}
        newTask={newTask}
        name='descr'
        placeholder='Введите описание задачи'
        styles={{ height: '120px', margin: '40px 0' }}
      />
      <div>
        <MyChackbox
          setNewTask={setOptions}
          newTask={options}
          name={'doCheckbox'}>
          Будет ли checkbox?
        </MyChackbox>
        <button>+</button>
      </div>
    </>
  );
};

export default ExtendedForm;
