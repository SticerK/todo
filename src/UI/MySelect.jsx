import { useState } from 'react';
import { AiOutlineCaretDown, AiFillCaretUp } from 'react-icons/ai';

const MySelect = ({ array, styles, newTask, setNewTask }) => {
  const [toggleSelect, setToggleSelect] = useState(false);
  const [value, setVatue] = useState();

  const handleCategories = ({ target }) => {
    setVatue(target.textContent);
    setNewTask({ ...newTask, category: value });
  };

  return (
    <div
      className='MySelect'
      style={styles}
      onClick={() => setToggleSelect((prevState) => !prevState)}>
      {value ? <p>{value}</p> : 'Категории'}
      {toggleSelect ? (
        <div className={array.length ? 'MySelect-option-container' : ''}>
          {array.map((item) => (
            <div className='MySelect-option' onClick={handleCategories}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
      {toggleSelect ? <AiFillCaretUp /> : <AiOutlineCaretDown />}
    </div>
  );
};

export default MySelect;
