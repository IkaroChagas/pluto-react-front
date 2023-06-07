import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './Sidebar/Sidebar';
import styles from './AdminLayout.module.css';


const AdminLayout: React.FC = () => {
    return (
        <div className={styles.admin}>
            <SideBar />
            <Outlet />
        </div>
    );
}

export default AdminLayout;