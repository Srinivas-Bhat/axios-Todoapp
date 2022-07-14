import React, { useState } from "react";

function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleAdd(text)}>ADD TODO</button>
    </div>
  );
}

export default AddTodo;
