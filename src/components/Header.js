import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loadingMessage: false,
    };
  }

  async componentDidMount() {
    this.setState({ loadingMessage: true });
    // Guarda o objeto do usuário
    const objectUser = await getUser();
    // salva o objeto do usuário em user
    this.setState({ loadingMessage: false, user: objectUser });
  }

  render() {
    const { user, loadingMessage } = this.state;
    return (
      <header data-testid="header-component">
        { loadingMessage
          ? <Loading />
          : <span data-testid="header-user-name">{user.name}</span> }
        <nav>
          <Link data-testid="link-to-search" to="/search">Search</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
          <Link data-testid="link-to-profile" to="/profile">Profile</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
