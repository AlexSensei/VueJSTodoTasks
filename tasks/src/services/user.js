import axios from 'axios';

export default class User {
  constructor() {
    this.setAuthorizationHeader();
  }

  register(userName, email, password) {
    axios
      .post(`api/auth/register`, {
        name: userName,
        email: email,
        password: password
      })
      .then(response => {
        this.login(response.data.email, password);
      });
  }
  setAuthorizationHeader() {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token')}`;
  }

  login(email, password) {
    axios
      .post('api/auth/login', { email: email, password: password })
      .then(response => {
        localStorage.setItem('token', response.data.access_token);
        this.setAuthorizationHeader(); 
      });
  }
}

export const users = new User();
