import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import FuncDate from '../utils/date';

const Task = ({ task, deleteTask, onChangeTask, ChangeTask }) => {
  return (
    <div className={'task' + (task.important ? ' important-task' : '')}>
      <div className='task-main'>
        {task.change ? (
          <div className='task-header'>
            <input
              value={task.title}
              className='task-input'
              onChange={(e) => ChangeTask(task, e, 'title')}></input>
          </div>
        ) : (
          <div className='task__title'>{task.title}</div>
        )}

        {task.change ? (
          <textarea
            className='task-textarea'
            value={task.descr}
            onChange={(e) => ChangeTask(task, e, 'descr')}></textarea>
        ) : (
          <div className='task__text'>{task.descr}</div>
        )}
      </div>
      <div className='task-footer'>
        <div className='task-date'>{FuncDate(task.id)}</div>
        <div>
          <AiFillEdit onClick={() => onChangeTask(task)} className='task-btn' />
          <AiFillDelete onClick={() => deleteTask(task)} className='task-btn' />
        </div>
      </div>
    </div>
  );
};

export default Task;
