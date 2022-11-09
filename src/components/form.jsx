import { useState } from 'react';
import FormFooter from './form-footer';
import SimpleForm from './simpleForm';
import ToggleForm from './toggleForm';
import ExtendedForm from './extendedForm';
import React from 'react';

const AddTask = React.memo(
  ({ addTask, formError, formModalOpen, categories }) => {
    const [newTask, setNewTask] = useState({});
    console.log('add');
    const [toggleForm, setToggleForm] = useState(1);
    console.log(newTask);
    const handleToggleForm = (e) => {
      e.stopPropagation();
      setToggleForm(+e.target.closest('.toggle-form').id);
    };

    return (
      <>
        <form className='form'>
          <ToggleForm
            toggleForm={toggleForm}
            handleToggleForm={handleToggleForm}
          />
          {toggleForm === 1 ? (
            <SimpleForm
              newTask={newTask}
              setNewTask={setNewTask}
              categories={categories}
            />
          ) : (
            <ExtendedForm newTask={newTask} setNewTask={setNewTask} />
          )}
          <FormFooter {...{ addTask, newTask, formError, formModalOpen }} />
        </form>
      </>
    );
  }
);

export default AddTask;
