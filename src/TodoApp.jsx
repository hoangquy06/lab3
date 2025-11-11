import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function createId() {
  return Math.floor(Math.random() * 100000);
}

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a to-do app', completed: true },
  ]);

  function addTodo(text) {
    const newTodo = { id: createId(), text, completed: false };
    setTodos(prev => [newTodo, ...prev]);
  }

  function toggleTodo(id) {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(t => t.id !== id));
  }

  return (
    <div style={{ maxWidth: 560 }}>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
