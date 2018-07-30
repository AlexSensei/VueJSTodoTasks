import axios from 'axios';

export default class Task {
    constructor () {
        axios.defaults.baseURL = 'http://myapp.test/';
    }

    getAll (status) {
        return axios.get(`tasks/${status}`,
        {
            'Content-Type':'application/json'
        });
    }

    get (id) {
        return axios.get('tasks',id,
        {
            'Content-Type':'application/json'
        });
    }
    
    add (task) {
        return axios.post('tasks',task,
        {
            'Content-Type':'application/json'
        });
    }

    delete (id) {
        return axios.delete(`tasks/${id}`,
        {
            'Content-Type':'application/json'
        });
    }

    update (id, task) {
        return axios.put(`tasks/update/${id}`,task,
        {
            'Content-Type':'application/json'
        })
    }
}

export const tasks = new Task();