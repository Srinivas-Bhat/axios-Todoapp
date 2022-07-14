import axios from "axios";

export function getTodos() {
  return axios.get(`https://json-server-mocker-masai.herokuapp.com/tasks`);
}

export function deleteTodo(id) {
  return axios({
    url: `https://json-server-mocker-masai.herokuapp.com/tasks/${id}`,
    method: "DELETE"
  });
}

export function addTodo({ title, status }) {
  return axios({
    url: `https://json-server-mocker-masai.herokuapp.com/tasks/`,
    method: "POST",
    data: {
      status,
      title
    }
  });
}

export function toggleTodoStatus({ newStatus, id }) {
  return axios({
    url: `https://json-server-mocker-masai.herokuapp.com/tasks/${id}`,
    method: "PATCH",
    data: {
      status: newStatus
    }
  });
}
