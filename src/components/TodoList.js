import React from 'react';
import styles from '/src/styles/card.module.css';

function TodoList({ todos, onDeleteTodo, onEditTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className={styles.card}>
          {todo}
          <div className={styles.btnDiv}>
            <button className={styles.btn} onClick={() => onEditTodo(index)}>Edit</button>
            <button className={styles.btn} onClick={() => onDeleteTodo(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
