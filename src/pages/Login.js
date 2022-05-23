import PropTypes from 'prop-types';
import React from 'react';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.loginUser = this.loginUser.bind(this);

    this.state = {
      name: '',
      disabledButton: true,
      loadingMessage: false,
    };
  }

  // Salva as alterações no estado
  onInputChange({ target }) {
    this.setState(() => ({ [target.name]: target.value }), this.validateLogin);
  }

  // Verifica se o login é válido
  validateLogin() {
    const { name } = this.state;
    const validLength = 3;
    if (name.length >= validLength) {
      this.setState({ disabledButton: false });
    } else {
      this.setState({ disabledButton: true });
    }
  }

  async loginUser() {
    const { name } = this.state;
    // const { history } = this.props;
    this.setState(() => ({ loadingMessage: true }));
    await createUser({ name });
    history.push('/search');
  }

  render() {
    const { disabledButton, loadingMessage } = this.state;
    if (loadingMessage === true) {
      return <Loading />;
    }
    return (
      <div data-testid="page-login">
        Login
        <form>
          <input
            data-testid="login-name-input"
            type="text"
            name="name"
            onChange={ this.onInputChange }
          />
          <button
            onClick={ this.loginUser }
            data-testid="login-submit-button"
            type="button"
            disabled={ disabledButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf.isRequired,
};

export default Login;
