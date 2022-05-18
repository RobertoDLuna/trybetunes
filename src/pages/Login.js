import React from 'react';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    state = {
      name: '',
      disabledButton: true,
      loading: '',
    };
    this.props = this.onInputChange.bind(this);
  }

  // Salva as alterações no estado
  onInputChange({ target }) {
    this.setState(() => ({ [target.name]: target.value }));
  }

  render() {
    return (
      <form>
        <input
          data-testid="login-name-input"
          type="text"
          name="name"
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
