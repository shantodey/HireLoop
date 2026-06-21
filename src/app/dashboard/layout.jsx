import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import React from 'react';

const DashboardLayoutPage = ({ children }) => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <DashboardSidebar />
            <main className='flex-1 overflow-y-auto'>{children}</main>
        </div>
    );
};

export default DashboardLayoutPage;