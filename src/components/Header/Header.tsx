import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import Button from 'components/Button/Button';

import { HeaderProps } from './Header.types';

import './Header.scss';

const Header: React.FC<HeaderProps> = ({ showButton, children }) => {
  const history = useHistory();

  // Sample data
  const isUserLoggedIn = false;

  // Showing login/logout button if user is logged in or logged out
  const showUserButton = useCallback(() => {
    let btn = null;
    if (showButton && isUserLoggedIn) {
      return (btn = <Button text='Log out' model='normal' />);
    } else if (showButton && !isUserLoggedIn) {
      return (btn = (
        <Button
          text='Log in'
          model='outline'
          onClick={() => history.push(AppRoute.login)}
        />
      ));
    } else return null;
  }, [history, isUserLoggedIn, showButton]);

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <span
          className='header__logo-container-logo'
          onClick={() => history.push(AppRoute.home)}
        >
          join.tsh.io
        </span>
      </div>
      {children}
      {showUserButton()}
    </header>
  );
};

export default Header;
