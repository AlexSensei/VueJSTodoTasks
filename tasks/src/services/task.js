import axios from "axios";

export default class Task {
  constructor() {
    axios.defaults.baseURL = "http://myapp.test/";
  }

  getAll() {
    return axios.get('tasks');
  }

  get(id) {
    return axios.get(`tasks/${id}`);
  }

  add(task) {
    return axios.post("tasks", task, {
      "Content-Type": "application/json"
    });
  }

  delete(id) {
    return axios.delete(`tasks/${id}`);
  }

  update(task) {
    return axios.put(`tasks/${task.id}`, task);
  }
}

export const tasks = new Task();
