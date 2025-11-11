import React from 'react';

export default function Card({ title, children }) {
  return (
    <div className="card">
      <h4 className="card-title">{title}</h4>
      <div>{children}</div>
    </div>
  );
}
