import React from 'react';
export const metadata = {
    title: 'dashboard | Try Next js',
    description: 'Try Next js',
}
const DashboardLayout = ({ children }) => {
    return (
        <div>
            <h1>Side</h1>
            {children}
        </div>
    );
};

export default DashboardLayout;