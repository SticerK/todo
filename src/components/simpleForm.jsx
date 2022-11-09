import MyInput from '../UI/MyInput';
import MyChackbox from '../UI/MyCheckbox';
import MyTextArea from '../UI/MyTextArea';
import MySelect from '../UI/MySelect';

const SimpleForm = ({ newTask, setNewTask, categories }) => {
  return (
    <>
      <MyInput
        placeholder='Введите название задачи'
        setNewTask={setNewTask}
        newTask={newTask}
        name={'title'}
      />
      <MyTextArea
        placeholder='Введите описание задачи'
        name={'descr'}
        setNewTask={setNewTask}
        newTask={newTask}
        styles={{ margin: '50px 0' }}
      />
      <MyChackbox
        newTask={newTask}
        setNewTask={setNewTask}
        styles={{ marginBottom: '20px' }}
        name={'important'}>
        Важная задача!
      </MyChackbox>
      <MySelect
        array={categories}
        styles={{ marginBottom: '20px' }}
        newTask={newTask}
        setNewTask={setNewTask}
      />
    </>
  );
};

export default SimpleForm;
