import React from 'react';
import Sidebar from './Sidebar';
export const metadata = {
    title: 'dashboard | Try Next js',
    description: 'Try Next js',
}
const DashboardLayout = ({ children }) => {
    return (
        <div className='flex container mx-auto'>
            <Sidebar />
            {children}
        </div>
    );
};

export default DashboardLayout;