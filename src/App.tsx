import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './Pages/Login/Login';
import AdminLayout from './components/AdminLayout/AdminLayout';
import AddPlans from './Pages/Plans/AddPlans';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddUnit from './Pages/Unit/AddUnit';
import ListPlans from './Pages/Plans/ListPlans/ListOfPlans';
import ListOfUnits from './Pages/Unit/ListUnits/ListOfUnits';
import ManipulateUnit from './Pages/Unit/ManipulateUnit/ManipulateUnit';
import ManipulatePlans from './Pages/Plans/ManipulatePlans/ManipulatePlans';


const App = () => {

  return (

    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/admin/adicionar-plano" element={<AddPlans />} />
        <Route path="/admin/listagem-de-planos/editar" element={<AddPlans />} />
        <Route path="/admin/listagem-de-planos" element={<ListPlans />} />
        <Route path="/admin/listagem-de-planos/editar" element={<ManipulatePlans />} />
        <Route path="/admin/adicionar-unidade" element={<AddUnit />} />
        <Route path="/admin/listagem-das-unidades" element={<ListOfUnits />} />
        <Route path="/admin/admin/listagem-das-unidades" element={<ManipulateUnit />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>

  );
};

export default App;
