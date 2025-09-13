import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../components/Admin/AdminLayout';
import Dashboard from '../components/Admin/Dashboard';
import Pipeline from '../components/Admin/Pipeline';
import Contacts from '../components/Admin/Contacts';
import Tasks from '../components/Admin/Tasks';
import Settings from '../components/Admin/Settings';
import Login from '../components/Admin/Login';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pipeline" element={<Pipeline />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AdminLayout>
  );
}