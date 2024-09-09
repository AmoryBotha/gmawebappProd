import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cell: '',
    email: '',
    id: '',
    password: ''
    
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </label>
      <label>
        Mobile Number:
        <input
          type="text"
          name="cell"
          value={formData.cell}
          onChange={handleChange}
          placeholder="Mobile Number"
        />
      </label>
      <label>
        ID Number:
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="ID Number"
        />
      </label>
      <label>
        {Password}:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
