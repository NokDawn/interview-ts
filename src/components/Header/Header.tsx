import React from 'react';

import Button from 'components/Button/Button';

import './Header.scss';

export interface HeaderProps {
  showButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showButton }) => {
  const isUserLoggedIn = false;
  const showUserButton = () => {
    let btn = null;
    if (showButton && isUserLoggedIn) {
      return (btn = <Button text='Log out' model='normal' />);
    } else if (showButton && !isUserLoggedIn) {
      return (btn = <Button text='Log in' model='outline' />);
    } else return null;
  };

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <span className='header__logo-container-logo'>join.tsh.io</span>
      </div>
      {showUserButton()}
    </header>
  );
};

export default Header;
