import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './Sidebar/Sidebar';
import * as C from './styled'


const AdminLayout: React.FC = () => {
    return (
        <C.AdminContainer>
            <SideBar />
            <Outlet />
        </C.AdminContainer>
    );
}

export default AdminLayout;