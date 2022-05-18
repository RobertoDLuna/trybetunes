import React from 'react';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  constructor() {
    super();
    state = {
      name: '',
      disabledButton: true,
      loadingMessage: true,
    };
    this.props = this.onInputChange.bind(this);
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
			this.setState( disabledButton:true )
		} else {
			this.setState( disabledButton:false )
		}
  }

  render() {
    return (
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
    );
  }
}

export default Login;
