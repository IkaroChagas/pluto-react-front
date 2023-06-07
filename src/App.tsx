import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './Pages/Login/Login';
import Home from './components/Home/Home';
import AdminLayout from './components/AdminLayout/AdminLayout';
import Plans from './components/Plans/Plans';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="admin" element={<AdminLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="plans" element={<Plans />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default App;
