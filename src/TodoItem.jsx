import React from 'react';
import PropTypes from 'prop-types';

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <span className="todo-text" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({ id: PropTypes.number.isRequired, text: PropTypes.string.isRequired, completed: PropTypes.bool.isRequired }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
