import axios from 'axios';

export default class Task {
    constructor () {
        axios.defaults.baseURL = 'http://myapp.test/';
    }

    getAll (status) {
        return axios.get(`tasks/${status}`);
    }

    get (id) {
        return axios.get('tasks', id);
    }
    
    add (task) {
        return axios.post('tasks', task);
    }

    delete (id) {
        return axios.delete(`tasks/${id}`);
    }

    update (id, task) {
        return axios.put(`tasks/update/${id}`, task)
    }
}

export const tasks = new Task();