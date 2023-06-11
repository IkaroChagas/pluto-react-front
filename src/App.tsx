import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './Pages/Login/Login';
import AdminLayout from './components/AdminLayout/AdminLayout';
import AddPlans from './Pages/Plans/AddPlans';
import Dashboard from './Pages/Dashboard/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/admin/adicionar-plano" element={<AddPlans />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default App;
