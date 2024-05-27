import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevent adding empty todos
    onAddTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
