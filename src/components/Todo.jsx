import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { deleteTodo, getTodos } from "./TodoFetch";
import { addTodo } from "./TodoFetch";
import TodoItem from "./TodoItem";
import { toggleTodoStatus } from "./TodoFetch";

function Todo() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    handleGetTodos();
  }, []);

  function handleGetTodos() {
    setLoading(true);
    setError(false);
    getTodos()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }

  function handleDelete(id) {
    deleteTodo(id).then(() => handleGetTodos());
  }

  function handleAdd(title) {
    addTodo({
      title,
      status: false
    }).then((res) => handleGetTodos());
  }

  function handleToggle(id, newStatus) {
    toggleTodoStatus({ id, newStatus }).then((res) => handleGetTodos());
  }

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      <AddTodo handleAdd={handleAdd} />
      <div>
        {data.map((el) => (
          <TodoItem
            key={el.id}
            title={el.title}
            id={el.id}
            status={el.status}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
