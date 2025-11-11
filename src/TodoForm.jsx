import React, { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value.trim());
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
      <input value={value} onChange={e => setValue(e.target.value)} placeholder="Add todo..." />
      <button type="submit">Add Todo</button>
    </form>
  );
}
