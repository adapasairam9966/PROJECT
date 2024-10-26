import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

const StudentDetails = () => {
  const { id } = useParams();
  const { students } = useContext(StudentContext);
  const student = students.find(s => s.id === parseInt(id));

  if (!student) return <p>Student not found</p>;

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Class: {student.class}</p>
      <p>Address: {student.address}</p>
      <p>Phone: {student.phone}</p>
    </div>
  );
};

export default StudentDetails;
