import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import React from 'react';

const DashboardLayoutPage = ({children}) => {
    return (
        <div className='flex min-h-screen'>
            <DashboardSidebar/>
            <main className='flex-1'>{children}</main>
        </div>
    );
};

export default DashboardLayoutPage;