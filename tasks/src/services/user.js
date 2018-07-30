import axios from 'axios';

export default class User {
    constructor () {
        axios.defaults.baseURL = 'http://myapp.test/';
    }

    register (userName, email, password) {
        axios.post(`api/auth/register`, {
              name: userName,
              email: email,
              password: password,
          },
          {
              'Content-Type':'application/json'
          });
    }
}

export const users = new User();