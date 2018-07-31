import axios from 'axios';

export default class UserService {
  constructor() {
    this.setAuthorizationHeader();
  }

  register(userName, email, password) {
    axios
      .post(`api/auth/register`, {
        userName,
        email,
        password
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
      .post('api/auth/login', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.access_token);
        this.setAuthorizationHeader(); 
      });
  }
  logout() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    if (localStorage.getItem('token') != null)
      return true;
    else
      return false;
  }
}

export const users = new UserService();
