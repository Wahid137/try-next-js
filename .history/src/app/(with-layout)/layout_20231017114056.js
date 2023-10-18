import React from 'react';

const WithLayout = ({ children }) => {
    return (
        <div>
            <nav>
                Header
            </nav>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default WithLayout;