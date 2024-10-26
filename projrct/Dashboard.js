import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const Dashboard = () => {
  const { students } = useContext(StudentContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Students: {students.length}</p>
      {/* You can add charts or more statistics here */}
    </div>
  );
};

export default Dashboard;
