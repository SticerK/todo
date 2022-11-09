import AllTasks from './alltasks';
import Header from './header';
import NavBar from './navbar';
import { useEffect, useState, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AddTask from './form';

const MainPage = () => {
  const startTasks = [
    { id: 1, title: 'Html/Css', descr: 'Learned html/css around 3 months' },
    { id: 2, title: 'Git', descr: 'learned git around 2 weeks' },
    { id: 3, title: 'React', descr: 'Loading...' },
  ];

  const ref = useRef(0);

  useEffect(() => {
    ref.current++;
  });

  console.log(ref);
  useEffect(() => {
    localStorage.setItem('obj', JSON.stringify(startTasks));
  }, []);

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('obj')) || startTasks
  );
  const [activeEl, setActiveEl] = useState({
    formModalOpen: false,
    formError: false,
    navbar: false,
  });

  const [categories, setCategories] = useState([]);

  const handleAddCategories = (value) => {
    setCategories([...categories, value]);
  };

  const handleDeleteCategories = (item) => {
    setCategories(categories.filter((cat) => cat !== item));
  };

  useEffect(() => {
    console.log('hello');
    localStorage.setItem('obj', JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (value) => {
    if (value.title) {
      value.id = new Date().getTime();
      value.change = false;

      if (value.important) {
        setTasks([value, ...tasks]);
      } else {
        setTasks([...tasks, value]);
      }
      setActiveEl({ ...activeEl, formError: false, formModalOpen: true });
    } else {
      setActiveEl({ ...activeEl, formError: !activeEl.formError });
    }
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((item) => item != task));
  };

  const onChangeTask = (item) => {
    setTasks(
      tasks.map((task) => {
        if (task === item) {
          return { ...item, change: !task.change };
        }
        return task;
      })
    );
  };

  const ChangeTask = (item, event, field) => {
    setTasks(
      tasks.map((task) => {
        if (task === item) return { ...task, [field]: event.target.value };
        return task;
      })
    );
  };

  //

  const toggleNavBar = () => {
    setActiveEl({
      ...activeEl,
      navbar: !activeEl.navbar,
    });
  };

  //

  return (
    <>
      <Header toggleNavBar={toggleNavBar} />
      <NavBar
        navbar={activeEl.navbar}
        toggleNavBar={toggleNavBar}
        categories={categories}
        handleAddCategories={handleAddCategories}
        handleDeleteCategories={handleDeleteCategories}
      />
      <Switch>
        <Route
          path='/alltasks'
          render={() => (
            <AllTasks
              tasks={tasks}
              navbar={activeEl.navbar}
              deleteTask={deleteTask}
              onChangeTask={onChangeTask}
              ChangeTask={ChangeTask}
            />
          )}
        />
        <Route
          path='/addtask'
          render={() => (
            <AddTask
              tasks={tasks}
              addTask={addTask}
              formError={activeEl.formError}
              formModalOpen={activeEl.formModalOpen}
              categories={categories}
            />
          )}
        />
        <Redirect to='/alltasks' />
      </Switch>
    </>
  );
};

export default MainPage;
