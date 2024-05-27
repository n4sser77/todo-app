import React, { useState } from 'react';
import TodoList from '../src/components/TodoList';
import TodoForm from '../src/components/TodoForm';


function HomePage() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    setTodos([...todos, text]);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    const newTodoText = prompt("Update the todo:", todos[index]);
    if (newTodoText !== null && newTodoText.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[index] = newTodoText;
      setTodos(updatedTodos);
    }
  };

  return (
    <div>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onEditTodo={handleEditTodo} />
    </div>
  );
}

export default HomePage;
