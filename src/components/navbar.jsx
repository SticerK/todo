import Categories from './categories';
import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = React.memo(
  ({
    navbar,
    toggleNavBar,
    categories,
    handleAddCategories,
    handleDeleteCategories,
  }) => {
    return (
      <div className={'navbar' + (navbar ? ' active-bar' : '')}>
        <div className='navbar-hamburger' onClick={toggleNavBar}>
          <div className='navbar-hamburger-line'></div>
          <div className='navbar-hamburger-line'></div>
        </div>
        <div className='navbar-center'>
          <Link to='/addtask' className='navbar-link' onClick={toggleNavBar}>
            Добавить пост
          </Link>
          <Link to='/alltasks' className='navbar-link' onClick={toggleNavBar}>
            Все посты
          </Link>
          <Categories
            handleDeleteCategories={handleDeleteCategories}
            categories={categories}
            handleAddCategories={handleAddCategories}
          />
        </div>
      </div>
    );
  }
);

export default NavBar;
