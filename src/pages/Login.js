import React from 'react';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);

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

  saveLoginName = userLogin() => {
    const { name } = this.state;
    this.setState(() => ({ loadingMessage: true }));
    createUser({ name });
  }

  render() {
    const { disabledButton } = this.state;
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

export default Login;
