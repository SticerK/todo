import MyButton from '../UI/MyButton';
import { AiOutlineInfo } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

const FormFooter = ({ addTask, formError, newTask, formModalOpen }) => {
  const history = useHistory();
  return (
    <div className='form-footer'>
      <MyButton func={addTask} newTask={newTask}>
        Добавить задачу
      </MyButton>
      {formError && (
        <p className='form-error-title'>
          <AiOutlineInfo /> Введите заголовок задачи
        </p>
      )}
      {formModalOpen && <div>Вы добавили задачу!</div>}
      <MyButton func={() => history.push('/alltasks')}>
        Перейти к задачам
      </MyButton>
    </div>
  );
};

export default FormFooter;
