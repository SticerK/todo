import Task from './task';
import MyButton from '../UI/MyButton';
import { useHistory } from 'react-router-dom';
import React from 'react';
const AllTasks = React.memo(
  ({ tasks, navbar, deleteTask, onChangeTask, ChangeTask }) => {
    const history = useHistory();

    return (
      <main
        className='mainField'
        style={
          navbar
            ? { marginLeft: '20%', transition: 'margin .3s ease' }
            : { marginLeft: '0%', transition: 'margin .3s ease' }
        }>
        {tasks.length === 0 ? (
          <div className='none-tasks-container'>
            <p className='none-tasks'>У вас нет ни одной задачи</p>
            <MyButton
              func={() => history.push('/addtask')}
              styles={{
                position: 'absolute',
                top: '60%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}>
              Добавить задачу
            </MyButton>
          </div>
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              onChangeTask={onChangeTask}
              ChangeTask={ChangeTask}
            />
          ))
        )}
      </main>
    );
  }
);

export default AllTasks;
