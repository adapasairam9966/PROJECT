import React, { useState, useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentRegistration = () => {
  const { addStudent } = useContext(StudentContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ id: Date.now(), ...formData }); // Temporary ID generation
    setFormData({ name: '', email: '', age: '', class: '', address: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" required />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
      <input name="class" value={formData.class} onChange={handleChange} placeholder="Class" required />
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default StudentRegistration;
