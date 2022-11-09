import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import React from 'react';

const Categories = React.memo(
  ({ categories, handleAddCategories, handleDeleteCategories }) => {
    const [addCategories, setAddCategories] = useState(false);
    const [newCategories, setNewCategories] = useState();
    console.log('categor');
    const addNewCategories = () => {
      setAddCategories((prevStare) => !prevStare);
      if (newCategories) {
        handleAddCategories(newCategories);
        setNewCategories('');
      }
    };

    return (
      <>
        <div className='categories'>
          {addCategories ? (
            <input
              className='categories-input'
              placeholder='Добавте категорию'
              value={newCategories}
              onChange={({ target }) => setNewCategories(target.value)}
            />
          ) : (
            <p>Категории:</p>
          )}

          <button className='addCategories' onClick={addNewCategories}>
            {addCategories ? <AiOutlineCheck /> : '+'}
          </button>
        </div>
        <div className='categories-list'>
          {categories.map((item) => (
            <div className='categories-item'>
              <p>{item}</p>
              <button
                className='addCategories'
                onClick={() => handleDeleteCategories(item)}>
                -
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
);

export default Categories;
