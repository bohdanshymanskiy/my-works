import React from 'react';
import HeaderCSS from './Header.module.css';

function Header() {
  return (
    <header className={HeaderCSS.header}>
      <div>
        <img src='./../../inforce-logo.jpg' alt='Inforce-logo' />
      </div>
      <h2>Inforce Shop</h2>
    </header>
  )
}

export default Header;