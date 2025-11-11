import React, { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Login form submitted:', formData);
    // clear fields for demo
    setFormData({ username: '', password: '' });
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320 }}>
      <div className="form-row">
        <label className="form-label" htmlFor="username">Username</label>
        <div className="form-input-inline">
          <input id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
      </div>

      <div className="form-row">
        <label className="form-label" htmlFor="password">Password</label>
        <div className="form-input-inline">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
          />
          <button type="button" onClick={() => setShowPassword(s => !s)}>show</button>
        </div>
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
