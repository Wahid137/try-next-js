import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <h1>Side</h1>
            {children}
        </div>
    );
};

export default DashboardLayout;