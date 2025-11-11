import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(t => (
        <TodoItem key={t.id} todo={t} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}
