import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';

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
    const { history } = this.props;
    this.setState(() => ({ loadingMessage: true }));
    await createUser({ name });
    history.push('/search');
  }

  render() {
    const { disabledButton, loadingMessage, login } = this.state;
    if (login) {
      return <Redirect to="/search" />;
    }
    const loadingElement = 'Carregando...';
    return (
      <div data-testid="page-login">
        {loadingMessage ? loadingElement : (
          <form>
            <input
              onChange={ this.onInputChange }
              type="text"
              name="name"
              data-testid="login-name-input"
            />
            <button
              onClick={ this.userLogin }
              type="button"
              disabled={ disabledButton }
              data-testid="login-submit-button"
            >
              Entrar
            </button>
          </form>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf.isRequired,
};

export default Login;
