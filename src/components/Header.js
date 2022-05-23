import React from 'react';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  render() {
    return (
      <header data-testid="header-component">
        <h1>Cabeçalho</h1>
      </header>
    );
  }
}

export default Header;
