import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]); // replace this with your mock data

  const addStudent = (student) => setStudents([...students, student]);
  const updateStudent = (updatedStudent) =>
    setStudents(students.map(s => s.id === updatedStudent.id ? updatedStudent : s));
  const deleteStudent = (id) => setStudents(students.filter(s => s.id !== id));

  return (
    <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
