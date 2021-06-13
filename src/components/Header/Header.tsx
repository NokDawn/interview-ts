import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'components/Button/Button';

import './Header.scss';

export interface HeaderProps {
  showButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showButton }) => {
  const history = useHistory();
  const isUserLoggedIn = false;
  const showUserButton = () => {
    let btn = null;
    if (showButton && isUserLoggedIn) {
      return (btn = <Button text='Log out' model='normal' />);
    } else if (showButton && !isUserLoggedIn) {
      return (btn = (
        <Button
          text='Log in'
          model='outline'
          onClick={() => history.push('/login')}
        />
      ));
    } else return null;
  };

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <span
          className='header__logo-container-logo'
          onClick={() => history.push('/')}
        >
          join.tsh.io
        </span>
      </div>
      {showUserButton()}
    </header>
  );
};

export default Header;
