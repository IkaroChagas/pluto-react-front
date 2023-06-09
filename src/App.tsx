import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './Pages/Login/Login';
import AdminLayout from './components/AdminLayout/AdminLayout';
import Plans from './Pages/Plans/Plans';
import Dashboard from './Pages/Dashboard/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="plans" element={<Plans />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default App;
