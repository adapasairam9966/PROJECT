import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import StudentList from './pages/StudentList';
import StudentRegistration from './pages/StudentRegistration';
import StudentDetails from './pages/StudentDetails';

function App() {
  return (
    <Router>
      <div>
        {/* Add a Navbar Component here if you want */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/register" element={<StudentRegistration />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
