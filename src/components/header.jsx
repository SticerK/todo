import React from 'react';

const Header = React.memo(({ toggleNavBar }) => {
  return (
    <header className='header'>
      <div className='hamburger' onClick={toggleNavBar}>
        <div className={'hamburger-line'}></div>
        <div className={'hamburger-line'}></div>
        <div className={'hamburger-line'}></div>
      </div>
      <h2 className='header__title'>ToDO List</h2>
    </header>
  );
});

export default Header;
