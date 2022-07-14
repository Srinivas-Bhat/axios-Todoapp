import React from "react";

function TodoItem({ title, status, id, handleDelete, handleToggle }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <div>{id}</div>
      <div>{title} </div>
      <button onClick={() => handleToggle(id, !status)}>
        {status ? "DONE" : "NOTDONE"}
      </button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
